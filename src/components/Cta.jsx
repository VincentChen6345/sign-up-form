import React from "react";
import styles from "./Cta.module.css";
import InputForm from "./InputForm";
import Card from "./UI/Card";

const Cta = () => {
  return (
    <div className={styles.container}>
      <Card>
        <p>Try is free 7 days then $20/mo. thereafter</p>
      </Card>
      <InputForm />
    </div>
  );
};

export default Cta;
