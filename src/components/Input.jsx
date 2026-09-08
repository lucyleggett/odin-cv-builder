function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Input({ label, type, onChange }) {
  return (
    <div className="input-row">
      <label htmlFor={label}>{toSentenceCase(label)}</label>
      <input type={type} id={label} name={label} onChange={onChange}></input>
    </div>
  );
}
