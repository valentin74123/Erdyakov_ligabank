import React from 'react';
import PropTypes from 'prop-types';

const ConvertNumberInput = (props) => {
  const {
    changeHandler,
    fieldId,
    inputName,
    value
  } = props;

  return (
    <input
      onChange={changeHandler}
      className="form-convert__money-amount"
      type="number"
      id={fieldId}
      name={inputName}
      value={value}
      placeholder="0"
    />
  );
};

ConvertNumberInput.propTypes = {
  changeHandler: PropTypes.func,
  fieldId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ConvertNumberInput;
