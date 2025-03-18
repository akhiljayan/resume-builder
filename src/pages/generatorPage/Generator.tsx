import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import DraggableList from "@component/draggableList";
import Card from "@component/card/Card";

import { formatJobTask } from "@data/util";
import akjn, { jobTypes } from "@data/akhiljayan.new";

import "./Generator.css";

type TObject = {
  [key: string]: string;
};
type TFieldItem = {
  id: string;
  values?: TObject[];
  type: "radio" | "text" | "textArea" | "dragable";
  label?: string;
  subtitle?: string;
  dataType: "meta" | "main" | "temp";
};
type TFields = {
  [key: string]: TFieldItem;
};
type TSnak = {
  show: boolean;
  message: string | null;
};
type TFormData = Record<
  | "name"
  | "email"
  | "phone"
  | "location"
  | "linkedin"
  | "github"
  | "jobTitle"
  | "summary"
  | "skills"
  | "experience"
  | "projects"
  | "education",
  any
>;
type TMeta = Record<"user" | "template" | "category", any>;
type TChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type TInputChangeEvent = KeyboardEvent<HTMLInputElement | HTMLDivElement>;

const fields: TFields = {
  user: {
    id: "user",
    values: [
      { value: "akjn", label: "Akhil" },
      { value: "kej", label: "Kavya" },
    ],
    type: "radio",
    label: "Users",
    dataType: "meta",
  },
  template: {
    id: "template",
    values: [
      { value: "modern", label: "Modern" },
      { value: "ats", label: "ATS" },
    ],
    type: "radio",
    label: "Template",
    dataType: "meta",
  },
  category: {
    id: "category",
    values: Object.entries(jobTypes)
      .map(([, v]: [string, string]) => ({ value: v, label: v }))
      .filter((i) => i.value !== jobTypes.ANY),
    type: "radio",
    label: "Category",
    dataType: "meta",
  },
  jobTitle: {
    id: "jobTitle",
    type: "text",
    label: "Role Title",
    dataType: "main",
  },
  summary: {
    id: "summary",
    type: "textArea",
    label: "Summary",
    dataType: "main",
  },
  addSkill: {
    id: "addSkill",
    type: "text",
    label: "Add Skill",
    subtitle: "Press Enter Key to add the Skill",
    dataType: "temp",
  },
};

const dfltErr = { show: false, message: null };
const dflyFrm: TFormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  jobTitle: "",
  summary: "",
  skills: [],
  experience: [],
  projects: [],
  education: [],
};

const Generator = () => {
  const navigate = useNavigate();
  const [dataFetched, setDataFetched] = useState<boolean>(false);
  const [snackBar, setSnakBar] = useState<TSnak>(dfltErr);
  const [metaData, setMetaData] = useState<TMeta>();
  const [formData, setFormData] = useState<TFormData>(dflyFrm);

  const updateFormData = (keyItem: keyof TFormData, value: any) => {
    setFormData({
      ...formData,
      name: keyItem === "name" ? value : formData?.name ?? "",
      email: keyItem === "email" ? value : formData?.email ?? "",
      phone: keyItem === "phone" ? value : formData?.phone ?? "",
      location: keyItem === "location" ? value : formData?.location ?? "",
      linkedin: keyItem === "linkedin" ? value : formData?.linkedin ?? "",
      github: keyItem === "github" ? value : formData?.github ?? "",
      jobTitle: keyItem === "jobTitle" ? value : formData?.jobTitle ?? "",
      summary: keyItem === "summary" ? value : formData?.summary ?? "",
      experience: keyItem === "experience" ? value : formData?.experience ?? "",
      skills: keyItem === "skills" ? value : formData?.skills ?? "",
      projects: keyItem === "projects" ? value : formData?.projects ?? "",
    });
  };

  const updateArray = (keyItem: keyof TFormData, index: number, val: any) => {
    const arrItem = [...formData[keyItem]];
    arrItem[index] = val;
    updateFormData(keyItem, arrItem);
  };

  const handleFetchData = () => {
    if (metaData?.user === "akjn") {
      const data: TFormData = {
        name: akjn.name,
        email: akjn.email,
        phone: akjn.phone,
        location: akjn.location,
        linkedin: akjn.linkedin,
        github: akjn.github,
        jobTitle: akjn.jobTitle,
        summary: akjn.summary,
        skills: akjn.skills,
        experience: formatJobTask(akjn.experience, metaData.category),
        projects: akjn.projects,
        education: akjn.education,
      };
      setFormData(data);
      setDataFetched(true);
      return;
    }
  };

  const handleOnChange = (e: TChangeEvent, dtype: string, id: string) => {
    if (dtype === "meta") {
      setMetaData({ ...metaData, [id]: e.target.value } as TMeta);
      return;
    }
    if (dtype === "main") {
      setFormData({ ...formData, [id]: e.target.value });
    }
  };

  const handleKeyDown = (e: TInputChangeEvent, dtype: string, id: string) => {
    if (dtype === "temp" && id === "addSkill" && e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      const val = target.value.trim();
      const items = formData?.skills || [];
      const exists = items.some((i: any) => i.trim() === val);
      if (!exists) {
        updateFormData("skills", [...items, val]);
        target.value = "";
      } else {
        setSnakBar({ show: true, message: `${val} already exists` });
      }
    }
  };

  const renderField = (f: TFieldItem) => {
    if (f.type === "radio") {
      return renderRadioGroup(f);
    }
    if (["text", "textArea"].includes(f.type)) {
      const isMulti = f.type === "textArea";
      return renderTextField(f.label, f.id, f.dataType, f.subtitle, isMulti);
    }
  };

  const renderRadioGroup = (field: TFieldItem) => {
    const radClass = "demo-radio-buttons-group-label";
    const radName = "row-radio-buttons-group";
    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{field.label}</FormLabel>
        <RadioGroup
          row
          aria-labelledby={radClass}
          name={radName}
          onChange={(e) => handleOnChange(e, field.dataType, field.id)}
        >
          {field.values?.map((i, index) => (
            <FormControlLabel
              key={`${index}-form-control-label`}
              value={i.value}
              control={<Radio size="small" />}
              label={i.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };

  const renderTextField = (
    lbl = "",
    id: string,
    dtyp: string,
    sub = "",
    multi = false
  ) => {
    const extra = multi ? { multiline: true, rows: 4 } : {};
    return (
      <FormControl fullWidth>
        <TextField
          size="small"
          label={lbl}
          value={!formData ? undefined : formData[id as keyof TFormData]}
          onChange={(e) => handleOnChange(e, dtyp, id)}
          onKeyDown={(e) => handleKeyDown(e, dtyp, id)}
          {...extra}
        />
        {sub && <FormHelperText>{sub}</FormHelperText>}
      </FormControl>
    );
  };

  const generateResume = () => {
    const isAts = metaData?.template === "ats";
    const add = isAts ? "times-roman" : "ubuntu";
    const remove = isAts ? "ubuntu" : "times-roman";
    document.body.classList.add(add);
    document.body.classList.remove(remove);
    navigate("/generate", { state: { formData, metaData } });
  };

  return (
    <div className="page-container">
      <Card
        label="Setup"
        defaultOpen
        footerButtonTitle="Fetch Data"
        disableFooterButton={!metaData?.user || !metaData.category}
        onFooterClick={handleFetchData}
      >
        <Grid container spacing={2}>
          <Grid size={4}>{renderField(fields.user)}</Grid>
          <Grid size={4}>{renderField(fields.template)}</Grid>
          <Grid size={4}>{renderField(fields.category)}</Grid>
        </Grid>
      </Card>

      <Card label="Contact">
        <Grid container spacing={2}>
          <Grid size={12}>{renderTextField("Name", "name", "main")}</Grid>
          <Grid size={12}>{renderTextField("Email", "email", "main")}</Grid>
          <Grid size={12}>{renderTextField("Phone", "phone", "main")}</Grid>
          <Grid size={12}>
            {renderTextField("Location", "location", "main")}
          </Grid>
          <Grid size={12}>
            {renderTextField("Linkedin", "linkedin", "main")}
          </Grid>
          <Grid size={12}>{renderTextField("github", "github", "main")}</Grid>
        </Grid>
      </Card>

      <Card label="Summary">
        <Grid container spacing={2}>
          <Grid size={12}>{renderField(fields.jobTitle)}</Grid>
          <Grid size={12}>{renderField(fields.summary)}</Grid>
        </Grid>
      </Card>

      <Card label="Skills">
        <Grid container spacing={2}>
          <Grid size={12}>{renderField(fields.addSkill)}</Grid>
          <Grid size={12}>
            <DraggableList
              isVertical={false}
              items={formData?.skills}
              onReorder={(l) => updateFormData("skills", l)}
            />
          </Grid>
        </Grid>
      </Card>

      <Card label="Experience">
        <Grid container spacing={5}>
          {(formData?.experience || []).map((i: any, index: number) => {
            return (
              <Grid size={12} key={`${index}-exp`}>
                <ExpItem
                  data={i}
                  meta={metaData}
                  onChange={(data: any) => {
                    updateArray("experience", index, data);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Card>

      <Card label="Projects">
        <Grid container spacing={5}>
          {(formData?.projects || []).map((i: any, index: number) => {
            return (
              <Grid size={12} key={`${index}-proj`}>
                <ProjectItem
                  data={i}
                  onChange={(data: any) => {
                    updateArray("projects", index, data);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Card>

      <Card label="Education">
        <Grid container spacing={5}>
          {(formData?.education || []).map((i: any, index: number) => {
            return (
              <Grid size={12} key={`${index}-edu`}>
                <EducationItem
                  data={i}
                  onChange={(data: any) => {
                    updateArray("education", index, data);
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      </Card>

      <div>
        <Button
          variant="contained"
          size="small"
          onClick={generateResume}
          disabled={!dataFetched || !formData}
        >
          Generate Resume
        </Button>
      </div>

      <Snackbar
        open={snackBar.show}
        autoHideDuration={6000}
        onClose={() => setSnakBar({ show: false, message: null })}
        message={snackBar.message}
      />
    </div>
  );
};

const ExpItem = ({ data, meta, onChange }: any) => {
  if (!meta?.category) {
    return <div>Please Select Category</div>;
  }

  const handleOnChange = (e: any, id: string, isCheckbox = false) => {
    const val = isCheckbox ? e?.target?.checked : e?.target?.value;
    onChange({
      ...data,
      [id]: val || "",
    });
  };

  const handleReOrder = (newList: any) => {
    onChange({ ...data, tasks: newList });
  };

  const renderTextField = (
    id: string,
    label: string,
    value: string,
    isMulti: boolean
  ) => {
    const extra = isMulti ? { multiline: true, rows: 4 } : {};
    return (
      <FormControl fullWidth>
        <TextField
          size="small"
          label={label}
          value={value || ""}
          onChange={(e) => handleOnChange(e, id)}
          {...extra}
        />
      </FormControl>
    );
  };

  const renderCheckbox = (
    id: string,
    label: string,
    value: boolean | string
  ) => {
    const val = !value || value === "" ? false : value;
    return (
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={val as boolean}
              onChange={(e) => handleOnChange(e, id, true)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={label}
        />
      </FormControl>
    );
  };

  return (
    <Grid size={12} className="exp-item-container">
      <div className="exp-title">
        {renderTextField("title", "Title", data.title, false)}
      </div>
      <div className="exp-company">
        {renderTextField("company", "Company", data.company, false)}
      </div>
      <div className="exp-duration-container">
        {renderTextField("start", "Start", data.start, false)} -{" "}
        {renderTextField("end", "End", data.end, false)}
      </div>
      <div className="exp-location">
        {renderTextField("location", "Location", data.location, false)}
      </div>
      <div className="exp-location">
        {renderTextField("location", "Location", data.location, false)}
      </div>
      <div className="exp-active">
        {renderCheckbox("active", "Show", data.active)}
      </div>
      <div className="exp-details">
        <DraggableList
          isVertical
          editable
          items={data?.tasks || []}
          onReorder={handleReOrder}
        />
      </div>
    </Grid>
  );
};

const ProjectItem = ({ data, onChange }: any) => {
  const handleOnChange = (e: any, id: string, isCheckbox = false) => {
    const val = isCheckbox ? e?.target?.checked : e?.target?.value;
    if (["tech", "role"].includes(id)) {
      onChange({ ...data, [id]: [...data[id], val] });
      return;
    }
    onChange({ ...data, [id]: val || "" });
  };

  const updateList = (id: string, value: any) => {
    onChange({ ...data, [id]: value });
  };

  const renderTextField = (
    id: string,
    label: string,
    value: string,
    showSub: boolean
  ) => {
    return (
      <FormControl fullWidth>
        <TextField
          size="small"
          label={label}
          value={value || ""}
          onChange={(e) => handleOnChange(e, id)}
        />
        {showSub && (
          <FormHelperText>Press Enter Key to add the Skill</FormHelperText>
        )}
      </FormControl>
    );
  };

  const renderCheckbox = (
    id: string,
    label: string,
    value: boolean | string
  ) => {
    const val = !value || value === "" ? false : value;
    return (
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={val as boolean}
              onChange={(e) => handleOnChange(e, id, true)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={label}
        />
      </FormControl>
    );
  };

  return (
    <Grid size={12} className="proj-item-container">
      <div className="proj-title">
        {renderTextField("title", "Title", data.title, false)}
      </div>
      <div className="proj-duration-container">
        {renderTextField("start", "Start", data.start, false)} -{" "}
        {renderTextField("end", "End", data.end, false)}
      </div>
      <div className="proj-active proj-duration-container">
        {renderTextField("order", "Display Order", data.order, false)}
        {renderCheckbox("active", "Show", data.active)}
      </div>
      <div className="proj-tech-container">
        <Grid size={12}>{renderTextField("tech", "Add Tech", "", true)}</Grid>
        <div className="proj-dragg-item">
          <DraggableList
            isVertical={false}
            items={data?.tech}
            onReorder={(l) => updateList("tech", l)}
          />
        </div>
      </div>
      <div className="just-border"></div>
      <div className="proj-role-container">
        <Grid size={12}>{renderTextField("role", "Add Role", "", true)}</Grid>
        <div className="proj-dragg-item">
          <DraggableList
            isVertical={false}
            items={data?.role}
            onReorder={(l) => updateList("role", l)}
          />
        </div>
      </div>
    </Grid>
  );
};

const EducationItem = ({ data, onChange }: any) => {
  const handleOnChange = (e: any, id: string, isCheckbox = false) => {
    const val = isCheckbox ? e?.target?.checked : e?.target?.value;
    onChange({ ...data, [id]: val || "" });
  };

  const renderTextField = (id: string, label: string, value: string) => {
    return (
      <FormControl fullWidth>
        <TextField
          size="small"
          label={label}
          value={value || ""}
          onChange={(e) => handleOnChange(e, id)}
        />
      </FormControl>
    );
  };

  const renderCheckbox = (
    id: string,
    label: string,
    value: boolean | string
  ) => {
    const val = !value || value === "" ? false : value;
    return (
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={val as boolean}
              onChange={(e) => handleOnChange(e, id, true)}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={label}
        />
      </FormControl>
    );
  };

  return (
    <Grid size={12} className="edu-item-container">
      <div className="edu-title">
        {renderTextField("degree", "Degree", data.degree)}
      </div>
      <div className="edu-university">
        {renderTextField("university", "University", data.university)}
      </div>
      <div className="edu-subject">
        {renderTextField("subject", "Subject", data.subject)}
      </div>
      <div className="edu-grade">
        {renderTextField("grade", "Grade", data.grade)}
      </div>
      <div className="edu-mode">
        {renderTextField("mode", "Mode", data.mode)}
      </div>
      <div className="edu-duration-container">
        {renderTextField("start", "Start", data.start)} -{" "}
        {renderTextField("end", "End", data.end)}
      </div>
      <div className="edu-active">
        {renderCheckbox("active", "Show", data.active)}
      </div>
    </Grid>
  );
};

export default Generator;
