function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function Input({ label, type }) {
  return (
    <div className="input-row">
      <label for={label}>{toSentenceCase(label)}</label>
      <input type={type} id={label} name={label}></input>
    </div>
  );
}
