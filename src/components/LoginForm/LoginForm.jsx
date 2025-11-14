import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";


function LoginForm () {
  const emailInput = {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
  };

  const passwordInput = {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password"
  };


  return (
    <div className="login_form">
      <p className="title">Login form</p>
      <div className="input_content">
        <Input
          name={emailInput.name}
          type={emailInput.type}
          placeholder={emailInput.placeholder}
          label={emailInput.label}
        />
        <Input
          name={passwordInput.name}
          type={passwordInput.type}
          placeholder={passwordInput.placeholder}
          label={passwordInput.label}
        />
      </div>
      <div className="button_content">
        <Button name="Login"/>
      </div>
    </div>
  );
}

export default LoginForm;