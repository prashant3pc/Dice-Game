import styles from "./Rules.module.css";
const Rules = () => {
  return (
    <div className={styles.rulesContainer}>
      <h2>How to play Dice Game</h2>
      <div className={styles.ruletext}>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 points will be deducted </p>
      </div>
    </div>
  );
};
export default Rules;
