import React from "react";
import PropTypes from "prop-types";

const ConversionHistoryItem = (props) => {
  const {
    key,
    date,
    inputAmount,
    inputCurrency,
    outputAmount,
    outputCurrency
  } = props;

  return (
    <li key={`convert-item-${key}`} className="conversion-history__item">
      <p className="conversion-history__date text-margin">{date}</p>
      <p className="conversion-history__value conversion-history__value--amount text-margin">
        {inputAmount.toString().replace(`.`, `,`)} {inputCurrency}
      </p>
      <p className="conversion-history__value conversion-history__value--converted-amount text-margin">
        {outputAmount.toString().replace(`.`, `,`)} {outputCurrency}
      </p>
    </li>
  );
};

ConversionHistoryItem.propTypes = {
  key: PropTypes.number.isRequired,
  date: PropTypes.date,
  inputAmount: PropTypes.number.isRequired,
  inputCurrency: PropTypes.string.isRequired,
  outputAmount: PropTypes.number.isRequired,
  outputCurrency: PropTypes.string.isRequired,
};

export default ConversionHistoryItem;
