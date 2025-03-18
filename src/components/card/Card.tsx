import { useState, ReactNode } from "react";
import classNames from "classnames";
import Button from "@mui/material/Button";

import "./Card.css";

type TCardProps = {
  label: string;
  defaultOpen?: boolean;
  children: ReactNode;
  footerButtonTitle?: string;
  footerContent?: ReactNode;
  disableFooterButton?: boolean;
  onFooterClick?: () => void;
};

const Card = ({
  label,
  defaultOpen,
  children,
  footerButtonTitle,
  footerContent,
  disableFooterButton,
  onFooterClick,
}: TCardProps) => {
  const [expanded, setExpanded] = useState(defaultOpen || false);

  const headerClass = classNames("card-header", expanded && "header-border");

  const handleHeadClick = () => setExpanded(!expanded);

  return (
    <div className="card-container">
      <div className={headerClass} onClick={handleHeadClick}>
        {label}
      </div>
      {expanded && <div className="card-content">{children}</div>}
      {expanded && (footerButtonTitle || footerContent) && (
        <div className="card-footer">
          {footerContent || (
            <Button
              variant="contained"
              size="small"
              disabled={disableFooterButton}
              onClick={onFooterClick}
            >
              {footerButtonTitle}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
