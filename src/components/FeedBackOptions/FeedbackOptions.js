import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsBtn = Object.keys(options);
  return (
    <>
      {optionsBtn.map(nameBtn => (
        <Button
          type="button"
          key={nameBtn}
          nameBtn={nameBtn}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
