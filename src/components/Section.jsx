import { useState } from "react";
import Input from "./Input";

export default function Section({
  canAddSections,
  onShow,
  isActive,
  inputEleObj,
}) {
  const [title, setTitle] = useState("");

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <section>
      {canAddSections && (
        <div className="title">
          <h3>{title}</h3>
          <button onClick={onShow}>{isActive ? "Hide" : "Show"}</button>
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
