import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormField.module.css';

const FormField = ({ label, ...props }) => {
  return (
    <div className={styles.field}>
      <label>{label}</label>
      <input autoComplete="off" {...props} />
    </div>
  );
};

export default FormField;

FormField.propTypes = {
  label: PropTypes.string,
};
