import PropTypes from "prop-types"
import {Currencies} from '../../const';

const CurrencyOptionsField = (props) => {
  const {
    changeHandler,
    fieldId,
    name,
    value
} = props;

  const currencies = Object.values(Currencies);

  return (    
    <>
      <select 
        onChange={changeHandler}
        className="form-convert__currency"
        id={fieldId}
        name={name}
        value={value}
      >
        {currencies.map((currencyType, i) => {
          return (
            <option key={`currency-type-${i}`} value={currencyType}>{currencyType}</option>
          );
        })}
      </select> 
    </>
  );
};

CurrencyOptionsField.propTypes = {
  changeHandler: PropTypes.func,
  fieldId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CurrencyOptionsField;
