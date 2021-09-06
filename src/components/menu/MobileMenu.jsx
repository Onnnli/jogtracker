import React from 'react';
import { NavLink } from 'react-router-dom';

import { appRouters } from '../../constants/appRouters';
import Logotype from '../../images/Logotype';

import styles from './Menu.module.css';

const MobileMenu = () => (
  <div className={styles.menu__active}>
    <div className={styles.menu__header}>
      <Logotype />
    </div>

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
  </div>
);

export default MobileMenu;
