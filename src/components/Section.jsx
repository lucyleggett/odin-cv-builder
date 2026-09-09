import { useState } from "react";
import Input from "./Input";

export default function Section({
  canAddSections,
  onShow,
  onChange,
  isActive,
  inputEleObj,
  values,
  ...rest
}) {
  const [hasLeft, setHasLeft] = useState(true);

  const headLabel = inputEleObj.find(el => el.headLabel)?.label;
  const title = (headLabel && values[headLabel]) || "✏️";

  const handleButtonClick = () => {
    onShow();
    setHasLeft(false);
  };

  return (
    <section {...rest}>
      {canAddSections && (
        <div className="title">
          <h3>{title}</h3>
          <button
            className="toggleView"
            onClick={handleButtonClick}
            onMouseLeave={() => setHasLeft(true)}
          >
            <span
              className={`chevron ${isActive ? "active" : ""} ${hasLeft ? "allow-hover" : ""}`}
            ></span>
            <span className="sr-only">{isActive ? "Hide" : "Show"}</span>
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
