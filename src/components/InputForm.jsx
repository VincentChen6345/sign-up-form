import styles from "./InputForm.module.css";
const InputForm = () => {
  return (
    <form className={styles.container}>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button type="submit">Claim your free trial</button>
      <span className={styles.disclaimer}>
        By clicking the button, you are agreeing to our{" "}
        <em>Terms and Services</em>
      </span>
    </form>
  );
};
export default InputForm;
