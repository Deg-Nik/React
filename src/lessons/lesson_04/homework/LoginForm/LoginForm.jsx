import "./styles.css";
import Input from "../Input/Input";
import Button from "../../../../components/Button/Button";

function LoginForm() {

  const login = (event) => {
    event.preventDefault();
    console.log("Login successfull");
  };

  return (
    <form onSubmit={login} className="login_form">
      <p className="title">Login form</p>
      <div className="input_content">
        <Input
          id="email_id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password_id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <div className="button_content">
        {/* <button onClick={login} id="clickme_button" type="button">
          Click me
        </button> */}
        {/* Когда кнопка button
        <Button  name="Login" type="button" onClick={login} /> */}
        <Button  name="Login" type="submit"/>
      </div>
    </form>
  );
}

export default LoginForm;
