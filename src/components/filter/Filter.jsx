import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import CustomDatePicker from '../fields/CustomDatePicker/CustomDatePicker';

import styles from './Filter.module.css';

const Filter = ({ date, onChange }) => {
  const onChangeStartDate = useCallback(
    value => {
      onChange({ ...date, startDate: value });
    },
    [date, onChange]
  );

  const onChangeFinishDate = useCallback(
    value => {
      onChange({ ...date, finishDate: value });
    },
    [date, onChange]
  );

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

export default memo(Filter);

Filter.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
