import React from 'react';
import PropTypes from 'prop-types';

import CustomDatePicker from '../fields/CustomDatePicker/CustomDatePicker';

import styles from './Filter.module.css';

const Filter = ({ date, onChange }) => {
  const onChangeStartDate = value => {
    onChange({ ...date, startDate: value });
  };

  const onChangeFinishDate = value => {
    onChange({ ...date, finishDate: value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <CustomDatePicker
          label="Date from"
          value={date.startDate}
          onChange={onChangeStartDate}
        />
        <CustomDatePicker
          label="Date to"
          value={date.finishDate}
          onChange={onChangeFinishDate}
        />
      </div>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
