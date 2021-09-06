import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Loader from '../loader/Loader';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Loader>{children}</Loader>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
