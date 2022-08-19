import React from "react";
import Description from "./Description";
import Cta from "./Cta";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  return (
    <div className={styles.container}>
      <Description />
      <Cta />
    </div>
  );
};
export default SignUpForm;
