import { useState } from "react";
import Input from "./Input";

export default function Section({
  canAddSections,
  onShow,
  onChange,
  onDelete,
  isActive,
  inputEleObj,
  values,
  ...rest
}) {
  const [hasLeft, setHasLeft] = useState(true);

  const headLabel = inputEleObj.find((el) => el.headLabel)?.label;
  const title = (headLabel && values[headLabel]) || "Incomplete";

  const handleButtonClick = () => {
    onShow();
    setHasLeft(false);
  };

  return (
    <section {...rest}>
      {canAddSections && (
        <div className="title">
          {!isActive && <h3>{title}</h3>}
          <button
            type="button"
            className="toggleView"
            onClick={handleButtonClick}
            onMouseLeave={() => setHasLeft(true)}
          >
            <span
              className={`chevron ${isActive ? "active" : ""} ${hasLeft ? "allow-hover" : ""}`}
            ></span>
            <span className="sr-only">{isActive ? "Hide" : "Show"}</span>
          </button>
          <button className="delete" type="button" onClick={onDelete}>
            <span className="sr-only">Delete entry</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
            </svg>
          </button>
        </div>
      )}
      {isActive && (
        <div className="input-cluster">
          {inputEleObj.map((element, index) => (
            <Input
              key={element.label + index}
              label={element.label}
              type={element.type}
              value={values[element.label] || ""}
              onChange={(e) => onChange(element.label, e.target.value)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
