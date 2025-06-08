import styles from "./TotalScore.module.css";
const TotalScore = ({ score }) => {
  return (
    <div className={styles.score}>
      <h1>{score}</h1>
      <p className={styles.tex}>Total Score</p>
    </div>
  );
};
export default TotalScore;
