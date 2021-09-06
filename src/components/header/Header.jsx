import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Menu from '../menu/Menu';
import Container from '../layout/container/Container';
import BurgerButton from '../buttons/BurgerButton/BurgerButton';
import MobileMenu from '../menu/MobileMenu';
import { appRouters } from '../../constants/appRouters';
import { jogsActions } from '../../redux/jogs/jogsActions';
import {
  jogsSelect,
  visibleFilterSelect,
} from '../../redux/jogs/jogsSelectors';
import FilterButton from '../buttons/FilterButton/FilterButton';
import { isAuthSelect } from '../../redux/user/userSelectors';

import Logotype from '../../images/Logotype.jsx';

import styles from './Header.module.css';
import filterButtonStyle from '../buttons/FilterButton/FilterButton.module.css';
import burgerButtonStyle from '../buttons/BurgerButton/BurgerButton.module.css';

const Header = ({ pathname, activeFilter, setActiveFilter, jogs, isAuth }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isJogPage = useMemo(() => pathname === appRouters.JOGS, [pathname]);

  const toggleHandler = useCallback(() => {
    setActiveFilter(!activeFilter);
  }, [setActiveFilter, activeFilter]);

  const openMobileMenu = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [setOpenMenu, openMenu]);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logotype />
          {isAuth && (
            <div className={styles.menu__wrapper}>
              <Menu />
              <FilterButton
                className={classNames({
                  [filterButtonStyle.filter_visible]: jogs.length && isJogPage,
                })}
                onClick={toggleHandler}
                disabled={!isJogPage}
                activeFilter={activeFilter}
              />
              <BurgerButton
                className={classNames({
                  [burgerButtonStyle.burger__button]: !isJogPage,
                })}
                active={openMenu}
                onClick={openMobileMenu}
              />
              {openMenu && <MobileMenu />}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  activeFilter: visibleFilterSelect(state),
  jogs: jogsSelect(state),
  isAuth: isAuthSelect(state),
});

const mapDispatchToProps = dispatch => ({
  setActiveFilter: visible => dispatch(jogsActions.activeFilter(visible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  activeFilter: PropTypes.bool.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
  jogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.string,
      distance: PropTypes.number,
      time: PropTypes.number,
      date: PropTypes.number,
    })
  ).isRequired,
  isAuth: PropTypes.bool.isRequired,
};
