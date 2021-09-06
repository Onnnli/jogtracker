import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

import activeFilterImage from '../../../images/filter-active.svg';
import filter from '../../../images/filter.svg';

import styles from './FilterButton.module.css';

const FilterButton = ({ className, activeFilter, toggleHandler, ...props }) => {
  return (
    <Button
      className={classNames(styles.filter__button, className)}
      onClick={toggleHandler}
      {...props}
    >
      <img
        src={activeFilter ? activeFilterImage : filter}
        alt="filter"
        className={classNames(styles.filter__image, {
          [styles.filter__image_active]: activeFilter,
        })}
      />
    </Button>
  );
};

export default FilterButton;

FilterButton.propTypes = {
  className: PropTypes.string,
  toggleHandler: PropTypes.func,
  activeFilter: PropTypes.bool,
};
