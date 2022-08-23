import styles from "./InputForm.module.css";
import Card from "./UI/Card";
import ClaimBtn from "./ClaimBtn";
import InputField from "./InputField";
import { useState } from "react";

const InputForm = () => {
  /*State Variables*/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  /////////////////////////////////
  /*State Variable-Input Validity*/
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [lastNameIsValid, setLastNameIsValid] = useState(true);
  const [emailInputIsValid, setEmailInputIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  /////////////////////////////////
  /*ChangeHandler functions*/
  const firstNameChangeHandler = (e) => {
    setFirstNameIsValid(true);
    setFirstName(e.target.value);
    return;
  };
  const lastNameChangeHandler = (e) => {
    setLastNameIsValid(true);
    setLastName(e.target.value);
    return;
  };
  const emailInputChangeHandler = (e) => {
    emailInputIsValid(true);
    setEmailInput(e.target.value);
    return;
  };
  const passwordChangeHandler = (e) => {
    setPasswordIsValid(true);
    setPassword(e.target.value);
    return;
  };
  ////////////////////////////////////
  ////////////////////////////////////
  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName.trim().length === 0) {
      setFirstNameIsValid(false);
    } else {
      setFirstName("");
    }
    if (lastName.trim().length === 0) {
      setLastNameIsValid(false);
    } else {
      setLastName("");
    }
    if (emailInput.trim().length === 0) {
      setEmailInputIsValid(false);
    } else {
      setEmailInput("");
    }
    if (password.trim().length === 0) {
      setPasswordIsValid(false);
    } else {
      setPassword("");
    }

    return;
  };
  return (
    <Card type="input">
      <form className={styles.container} onSubmit={submitHandler}>
        <InputField
          className="firstName"
          type={"text"}
          placeholder="First Name"
          stateVariable={firstNameIsValid}
          onChange={firstNameChangeHandler}
          onSubmit={submitHandler}
          value={firstName}
          errorMessage="First Name cannot be empty"
        />
        <InputField
          className="lastName"
          type={"text"}
          placeholder="Last Name"
          stateVariable={lastNameIsValid}
          onChange={lastNameChangeHandler}
          onSubmit={submitHandler}
          value={lastName}
          errorMessage="Last Name cannot be empty"
        />
        <InputField
          className="emailInput"
          type={"text"}
          placeholder="Email Address"
          stateVariable={emailInputIsValid}
          onChange={emailInputChangeHandler}
          onSubmit={submitHandler}
          value={emailInput}
          errorMessage="Looks like this is not a valid email"
        />
        <InputField
          className="password"
          type={"text"}
          placeholder="Password"
          stateVariable={passwordIsValid}
          onChange={passwordChangeHandler}
          onSubmit={submitHandler}
          value={password}
          errorMessage="Password cannot be empty"
        />

        <ClaimBtn />
        <span className={styles.disclaimer}>
          By clicking the button, you are agreeing to our
          <a href="https://www.google.com/"> Terms and Services</a>
        </span>
      </form>
    </Card>
  );
};
export default InputForm;
