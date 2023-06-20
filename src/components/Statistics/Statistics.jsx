import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
