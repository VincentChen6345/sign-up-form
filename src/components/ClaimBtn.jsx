import styles from "./ClaimBtn.module.css";

const ClaimBtn = (props) => {
  return (
    <button type="submit" className={styles.btn}>
      Claim your free trial
    </button>
  );
};
export default ClaimBtn;
