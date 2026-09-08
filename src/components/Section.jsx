import Input from "./Input";

export default function Section({ heading, inputEleObj, isActive, onShow }) {
  return (
    <section className={heading.toLowerCase().replace(/\s+/g, '-')}>
      <h2>{heading}</h2>
      <button onClick={onShow}>{isActive ? "Hide" : "Show"}</button>
      {isActive &&
        inputEleObj.map((element, index) => (
          <Input
            key={element.label + index}
            label={element.label}
            type={element.type}
          />
        ))}
    </section>
  );
}
