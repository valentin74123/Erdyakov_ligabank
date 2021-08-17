import React from "react";
import PropTypes from "prop-types";
import ConvertNumberInput  from "../convert-number-input/convert-number-input";
import CurrencyOptionsField from "../currency-options-field/currency-options-field";
import {withConverter} from "../../hocs/with-converter";

const Converter = (props) => {
  const {children, submitHandler, typeChangeHandler, valueChangeHandler} = props;
  const {currencyInput, currencyOutput} = props.state;

  return (
    <section className="converter">
      <div className="converter__wrapper padding">
        <h3 className="converter__title text-margin">Конвертер валют</h3>
          <form onSubmit={submitHandler} className="converter__form-convert form-convert" action="#" method="post">
            <ul className="form-convert__list list">
              <li className="form-convert__item form-convert__item--arrows">
                <div className="form-convert__item-wrapper">
                  <label className="form-convert__item-title" htmlFor="currency-input">У меня есть</label>
                  <div className="form-convert__currency-info">
                    <ConvertNumberInput 
                      changeHandler={valueChangeHandler}
                      fieldId={"currency-input"}
                      inputName={"currencyInput"}
                      value={currencyInput.amount}
                    />

                    <label htmlFor="currency-select" className="visually-hidden">Валюта</label>
                    <CurrencyOptionsField 
                      changeHandler={typeChangeHandler}
                      fieldId={"currency-select"}
                      name={"currencyInput"}
                      value={currencyInput.type}
                    />
                  </div> 
                </div>
              </li>
            

              <li className="form-convert__item">
                <div className="form-convert__item-wrapper">
                  <label className="form-convert__item-title" htmlFor="currency-output">Хочу приобрести</label>
                  <div className="form-convert__currency-info">
                    <ConvertNumberInput 
                      changeHandler={valueChangeHandler}
                      fieldId={"currency-output"}
                      inputName={"currencyOutput"}
                      value={currencyOutput.amount}
                    />

                    <label htmlFor="currency-select-out" className="visually-hidden">Валюта</label>
                    <CurrencyOptionsField 
                      changeHandler={typeChangeHandler}
                      fieldId={"currency-select-out"}
                      name={"currencyOutput"}
                      value={currencyOutput.type}
                    />
                  </div> 
                </div>
              </li>
            </ul>

            <div className="form-convert__inputs">
              <div id="calendar">
                {children}
              </div>

              <button className="form-convert__submit-button" type="submit">Сохранить результат</button>
            </div>
          </form>
      </div>
    </section>
  );
};

Converter.propTypes = {
  state: PropTypes.shape({
    currencyInput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
    currencyOutput: PropTypes.shape({
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired
    }),
  }).isRequired,
  children: PropTypes.element.isRequired,
  submitHandler: PropTypes.func.isRequired,
  typeChangeHandler: PropTypes.func.isRequired,
  valueChangeHandler: PropTypes.func.isRequired
};

export default withConverter(Converter);
