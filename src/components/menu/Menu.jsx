import React from 'react';
import { NavLink } from 'react-router-dom';

import { appRouters } from '../../constants/appRouters';

import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink
        activeClassName={styles.link__active}
        className={styles.link}
        to={appRouters.JOGS}
      >
        JOGS
      </NavLink>
      <NavLink
        activeClassName={styles.link__active}
        className={styles.link}
        to={appRouters.INFO}
      >
        INFO
      </NavLink>
      <NavLink
        activeClassName={styles.link__active}
        className={styles.link}
        to={appRouters.CONTACT}
      >
        CONTACT US
      </NavLink>
    </div>
  );
};

export default Menu;
