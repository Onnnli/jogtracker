import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './BurgerButton.module.css';

const BurgerButton = ({ className, active, ...props }) => (
  <Button
    className={classNames(styles.burger__menu, className, {
      [styles.active]: active,
    })}
    type="button"
    {...props}
  >
    <span className={styles.burger__item}> </span>
  </Button>
);

export default BurgerButton;

BurgerButton.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
};
