export default function Input({ label, type }) {
  return (
    <div className="input-row">
      <label for={label}>{label}</label>
      <input type={type} id={label} name={label}></input>
    </div>
  );
}
