import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styles from "./GamePlay.module.css";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(3);
  const [error, setError] = useState("");
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetScore = () => {
    setScore(0);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <div>
      <div className={styles.top}>
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}></RollDice>
      <div className={styles.btns}>
        <button onClick={resetScore}>Reset</button>
        <button onClick={() => setshowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showRules && <Rules></Rules>}
    </div>
  );
};
export default GamePlay;
