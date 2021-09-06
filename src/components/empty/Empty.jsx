import React from 'react';
import PropTypes from 'prop-types';

import sad from '../../images/sad-rounded-square-emoticon.svg';

import styles from './Empty.module.css';

const Empty = ({ children }) => {
  return (
    <div className={styles.content}>
      <div className={styles.empty}>
        <img src={sad} alt="empty" />
        <h4>Nothing is there</h4>
      </div>
      {children}
    </div>
  );
};

export default Empty;

Empty.propTypes = {
  children: PropTypes.node,
};
