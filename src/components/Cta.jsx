import React from "react";
import styles from "./Cta.module.css";
import InputForm from "./InputForm";

const Cta = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Try is free 7 days then $20/mo. thereafter</p>
      </div>
      <InputForm />
    </div>
  );
};

export default Cta;
