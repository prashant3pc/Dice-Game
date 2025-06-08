import styles from "./RollDice.module.css";
const RollDice = ({ currentDice, rollDice }) => {
  return (
    <div>
      <div className={styles.images} onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="" />

        <p>Click on Dice to roll</p>
      </div>
    </div>
  );
};
export default RollDice;
