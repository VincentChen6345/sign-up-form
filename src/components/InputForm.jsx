import styles from "./InputForm.module.css";
import Card from "./UI/Card";
import ClaimBtn from "./ClaimBtn";
import { useState } from "react";

const InputForm = () => {
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const firstNameChangeHandler = (e) => {
    setFirstNameIsValid(true);
    setFirstName(e.target.value);

    return;
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName.trim().length === 0) {
      setFirstNameIsValid(false);
    } else {
      setFirstName("");
    }

    return;
  };
  return (
    <Card type="input">
      <form className={styles.container} onSubmit={submitHandler}>
        <div className={`${styles.firstName} `}>
          <input
            className={`${styles.input} ${!firstNameIsValid && styles.invalid}`}
            type="text"
            placeholder="First Name"
            onChange={firstNameChangeHandler}
            onSubmit={submitHandler}
            value={firstName}
          />
          <span
            className={`${styles.error} ${firstNameIsValid && styles.hidden}`}
          >
            First Name cannot be empty
          </span>
          <span
            className={`${styles.errorIcon} ${
              firstNameIsValid && styles.hidden
            }`}
          >
            !
          </span>
        </div>
        <div className={styles.lastName}>
          <input className={styles.input} type="text" placeholder="Last Name" />
        </div>
        <div className={styles.emailInput}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles.password}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
        </div>
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
