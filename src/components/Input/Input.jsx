import "./styles.css";

function Input({
  name = "input",
  type = "text",
  placeholder = "Enter your text",
  label = "text",
}) {
  return (
    <div className="input_container">
      <label className="label_content">{label}</label>
      <input className="input_content"
      name={name}
      type={type} 
      placeholder={placeholder}
      />
    </div>
  );
}

export default Input;