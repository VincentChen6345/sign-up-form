import React from "react";
import styles from "./Cta.module.css";
import InputForm from "./InputForm";
import Card from "./UI/Card";

const Cta = () => {
  return (
    <div className={styles.container}>
      <Card>
        <p className={styles.paragraph}>
          <em>Try is free 7 days</em> then $20/mo. thereafter
        </p>
      </Card>
      <InputForm />
    </div>
  );
};

export default Cta;
