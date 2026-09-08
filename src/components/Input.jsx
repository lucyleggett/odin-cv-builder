function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Input({ label, type, onChange }) {
  const InputElement = type === "textarea" ? "textarea" : "input";

  return (
    <div className="input-row">
      <label htmlFor={label}>{toSentenceCase(label)}</label>
      <InputElement
        type={type !== "textarea" ? type : undefined}
        rows={type !== "textarea" ? null : 4}
        id={label}
        name={label}
        onChange={onChange}
      />
    </div>
  );
}
