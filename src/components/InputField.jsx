import styles from "./InputField.module.css";
const InputField = (props) => {
  return (
    <div className={styles[`${props.className}`]}>
      <input
        className={`${styles.input} ${!props.stateVariable && styles.invalid}`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        value={props.value}
      />
      <span
        className={`${styles.error} ${props.stateVariable && styles.hidden}`}
      >
        {props.errorMessage}
      </span>
      <span
        className={`${styles.errorIcon} ${
          props.stateVariable && styles.hidden
        }`}
      >
        !
      </span>
    </div>
  );
};
export default InputField;
