import React from "react";
import {connect} from "react-redux";
import ConversionHistoryItem from "../conversion-history-item/conversion-history-item";
import {clearHistory} from "../../store/actions";
import PropTypes from "prop-types";

const ConversionHistory = (props) => {
  const {history, clear}  = props;

  return (
    <section className="conversion-history">
      <div className="conversion-history__wrapper">
        <h3 className="conversion-history__title text-margin">История конвертация</h3>
        <ul className="conversion-history__list list">
          {history.map((item, i) => (
            <ConversionHistoryItem
              key = {i}
              date = {item.date}
              inputAmount = {item.currencyInput.amount}
              inputCurrency = {item.currencyInput.type}
              outputAmount = {item.currencyOutput.amount}
              outputCurrency = {item.currencyOutput.type}
            />
          ))}
        </ul>
        
        {history.length > 0 && (
          <button className="conversion-history__button" onClick={clear}>Очистить историю</button>
        )}
      </div>
    </section>
  );
};

ConversionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    currencyInput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
    currencyOutput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
  })).isRequired,
  clear: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  history: state.CONVERSION_HISTORY.history,
});

const mapDispatchToProps = (dispatch) => ({
  clear() {
    dispatch(clearHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversionHistory);
