import "./styles.css";

function Button({ name = "Send", type = "button", onClick, backgroundColor }) {
  return (
    <button
      className="button_component"
      type={type}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      {name}
    </button>
  );
}

export default Button;
