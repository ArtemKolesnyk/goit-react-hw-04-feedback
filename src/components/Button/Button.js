import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ nameBtn, onLeaveFeedback }) => {
  console.log(nameBtn);
  return (
    <Btn onClick={() => onLeaveFeedback(nameBtn)} type="button">
      {nameBtn}
    </Btn>
  );
};

Button.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
