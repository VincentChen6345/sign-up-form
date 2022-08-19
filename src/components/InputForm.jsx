import styles from "./InputForm.module.css";
import Card from "./UI/Card";
import ClaimBtn from "./ClaimBtn";

const InputForm = () => {
  return (
    <Card type="input">
      <form className={styles.container}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <ClaimBtn />
        <span className={styles.disclaimer}>
          By clicking the button, you are agreeing to our
          <a href="#"> Terms and Services</a>
        </span>
      </form>
    </Card>
  );
};
export default InputForm;
