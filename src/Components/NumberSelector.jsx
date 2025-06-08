import { useState } from "react";
import styles from "./NumberSelector.module.css";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div>
      <p className={styles.error}>{error}</p>
      <div className={styles.flex}>
        {arrNumber.map((value, i) => (
          <box
            key={i}
            className={`${selectedNumber === value ? styles.selected : ""}`}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </box>
        ))}
      </div>
      <h1 className={styles.numb}>Select Number</h1>
    </div>
  );
};
export default NumberSelector;
