import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import classNames from "classnames";
import { CSS } from "@dnd-kit/utilities";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import "./DraggableList.css";

type TDraggableListProps = {
  items: string[];
  isVertical: boolean;
  label?: string;
  editable?: boolean;
  onReorder: (result: string[]) => void;
};

type TSortableItemProps = {
  id: any;
  index: number;
  isVertical: boolean;
  editable?: boolean;
  onRemove: (id: any, index: number) => void;
  onRemoveByIndex: (index: number) => void;
  onChange: (id: any, index: number) => void;
};

const DraggableList = ({
  items,
  isVertical,
  label,
  editable,
  onReorder,
}: TDraggableListProps) => {
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const newList = arrayMove(items, oldIndex, newIndex);
      onReorder(newList);
    }
  };

  const handleAddRow = () => {
    const newList = [...items, ""];
    onReorder(newList);
  };

  const handleRemove = (id: any) => {
    const newList = items.filter((i) => i !== id);
    onReorder(newList);
  };

  const handleRemoveByIndex = (index: number) => {
    const newList = [...items];
    newList.splice(index, 1);
    onReorder(newList);
  };

  const handleOnChange = (id: any, index: number) => {
    const newList = [...items];
    newList[index] = id;
    onReorder(newList);
  };

  const strategy = isVertical
    ? verticalListSortingStrategy
    : horizontalListSortingStrategy;

  const parentClass = classNames(
    isVertical ? "vertical-item-parent" : "horizontal-item-parent",
    "parent-div",
    "space-y-2",
    "p-4",
    "bg-gray-100",
    "rounded-lg"
  );

  return (
    <FormControl style={{ width: "100%" }}>
      {label && <FormLabel style={{ marginBottom: "10px" }}>{label}</FormLabel>}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={strategy}>
          <div className={parentClass}>
            {items.map((item, index) => (
              <SortableItem
                key={`${index}-sortable-item`}
                id={item}
                index={index}
                isVertical={isVertical}
                onRemove={handleRemove}
                onRemoveByIndex={handleRemoveByIndex}
                onChange={handleOnChange}
                editable={editable}
              />
            ))}
            {editable && <button onClick={handleAddRow}>Add Item</button>}
          </div>
        </SortableContext>
      </DndContext>
    </FormControl>
  );
};

function SortableItem({
  id,
  index,
  isVertical,
  editable,
  onRemoveByIndex,
  onRemove,
  onChange,
}: TSortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleIndividualChange = (e: any) => {
    e.stopPropagation();
    onChange(e.target.value, index);
  };

  const itemClass = classNames(
    isVertical ? "vertical-item" : "horizontal-item",
    "drag-item"
  );

  const renderNonEditable = () => {
    return (
      <div className="drag-pointer flex-pointer">
        <span {...attributes} {...listeners} className="drag-handle">
          {id}
        </span>
        <button
          className="remove-button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id, index);
          }}
        >
          x
        </button>
      </div>
    );
  };

  const renderEditable = () => {
    return (
      <>
        <span
          {...attributes}
          {...listeners}
          className="drag-handle drag-pointer"
        >
          &#9776;
        </span>
        <FormControl fullWidth>
          <TextField
            size="small"
            defaultValue={id}
            onChange={(e) => handleIndividualChange(e)}
            multiline
            rows={4}
          />
        </FormControl>
        <button
          className="remove-button"
          onClick={(e) => {
            e.stopPropagation();
            onRemoveByIndex(index);
          }}
        >
          x
        </button>
      </>
    );
  };

  return (
    <div ref={setNodeRef} style={style} className={itemClass}>
      {editable ? renderEditable() : renderNonEditable()}
    </div>
  );
}

export default DraggableList;
