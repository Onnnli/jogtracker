import React from 'react';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

import styles from './CustomDatePicker.module.css';

const CustomDatePicker = ({ className, value, onChange, label, ...props }) => {
  return (
    <div className={classnames(styles.date, className)}>
      <label>{label}</label>
      <DatePicker
        autoComplete="off"
        className={styles.datePicker}
        selected={value}
        onChange={values => onChange(values)}
        dateFormat="dd.MM.yyyy"
        {...props}
      />
    </div>
  );
};

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};
