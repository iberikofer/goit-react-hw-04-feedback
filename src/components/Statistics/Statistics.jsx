const Statistics = ({ total, positivePercentage, good, neutral, bad }) => {
  return (
    <div>
      <br />
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Percentage of positive feedback: {positivePercentage.toFixed(0)}%</p>
    </div>
  );
};
export default Statistics;
