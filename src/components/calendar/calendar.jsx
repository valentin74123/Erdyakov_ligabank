import React from "react";
import PropTypes from "prop-types";

const Calendar = (props) => {
  const {onClick, value} = props;

  return (
    <>
      <button className="form-convert__calendar" type="button" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

Calendar.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Calendar;
