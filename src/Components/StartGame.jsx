import styles from "./StartGame.module.css";

const StartGame = ({ toggle }) => {
  return (
    <div className={`${styles.firstgame} container`}>
      <div className={styles.game}>
        <img src="/images/dices 1.png" alt="dice" />
      </div>
      <div className={styles.text}>
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </div>
  );
};
export default StartGame;
