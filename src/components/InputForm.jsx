import styles from "./InputForm.module.css";
import Card from "./UI/Card";
const InputForm = () => {
  return (
    <Card type="input">
      <form className={styles.container}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Claim your free trial</button>
        <span className={styles.disclaimer}>
          By clicking the button, you are agreeing to our
          <em>Terms and Services</em>
        </span>
      </form>
    </Card>
  );
};
export default InputForm;
