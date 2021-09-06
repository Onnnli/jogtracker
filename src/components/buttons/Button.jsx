import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ className, children, ...props }) => {
  return (
    <button className={classNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
