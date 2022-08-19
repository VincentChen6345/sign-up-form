import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  const whiteCard = `${styles.card} ${styles.white}`;
  const blueCard = `${styles.card} ${styles.blue}`;
  const isInput = props.type;
  return (
    <div className={isInput === "input" ? whiteCard : blueCard}>
      {props.children}
    </div>
  );
};
export default Card;
