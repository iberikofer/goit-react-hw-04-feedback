import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div style={{ margin: 40 }}>
      <button
        type="button"
        className={css.button}
        style={{ backgroundColor: 'forestgreen' }}
        onClick={() => onLeaveFeedback(options[0])}
      >
        GOOD👍
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onLeaveFeedback(options[1])}
      >
        NEUTRAL👌
      </button>
      <button
        type="button"
        className={css.button}
        style={{ backgroundColor: 'red' }}
        onClick={() => onLeaveFeedback(options[2])}
      >
        BAD👎
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
