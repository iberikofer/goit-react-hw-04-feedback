import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
