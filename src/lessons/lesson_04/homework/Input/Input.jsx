import "./styles.css";

function Input({
  id,
  name,
  type,
  placeholder,
  label,
}) {
  return (
    <div className="input_container">
      <label className="label_content" htmlFor={id}>{label}</label>
      <input className="input_content"
      id={id}
      name={name}
      type={type} 
      placeholder={placeholder}
      />
    </div>
  );
}

export default Input;