import { useState } from "react";
import Input from "./Input";

export default function Section({
  canAddSections,
  onShow,
  isActive,
  inputEleObj,
  ...rest
}) {
  const [title, setTitle] = useState("");
  const [hasLeft, setHasLeft] = useState(true);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleButtonClick() {
    onShow();
    setHasLeft(false);
  }

  return (
    <section {...rest}>
      {canAddSections && (
        <div className="title">
          <h3>{title ? title : "Untitled"}</h3>
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
              onChange={element.headLabel ? handleChange : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}
