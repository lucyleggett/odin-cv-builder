import Input from "./Input";

export default function Section({ heading, inputEleObj, isActive }) {
  return (
    <section className={heading}>
      <h2>{heading}</h2>
      {inputEleObj.map((element) => (
        <Input key={element.label} label={element.label} type={element.type} />
      ))}
    </section>
  );
}
