import React, { memo, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';
import JogsWrapper from '../components/jog/JogsWrapper';
import Filter from '../components/filter/Filter';
import JogFormModal from './JogFormModal/JogFormModal';
import { appRouters } from '../constants/appRouters';
import { jogsActions } from '../redux/jogs/jogsActions';
import {
  filterJogsSelect,
  jogsSelect,
  sortDateJogsSelect,
  visibleFilterSelect,
} from '../redux/jogs/jogsSelectors';
import CreateJogButton from '../components/buttons/CreateJogButton/CreateJogButton';

import add from '../images/add.svg';

import styles from '../components/buttons/CreateJogButton/CreateJogButton.module.css';

const Jogs = ({
  pathname,
  getJogs,
  jogs,
  activeFilter,
  filter,
  setActiveFilter,
  sortDateJogs,
}) => {
  const [visible, setVisible] = useState(false);
  const isJogPage = useMemo(() => pathname === appRouters.JOGS, [pathname]);
  const jogsState = useMemo(() => jogs, [jogs]);

  const [date, setSate] = useState({
    startDate: new Date(sortDateJogs.start * 1000),
    finishDate: new Date(sortDateJogs.end * 1000),
  });

  useEffect(() => {}, [jogsState]);

  useEffect(() => {
    getJogs();
  }, []);

  useEffect(() => {
    return () => {
      setActiveFilter(false);
    };
  }, []);

  const filterList = filter({
    start: new Date(date.startDate).getTime() / 1000,
    end: new Date(date.finishDate).getTime() / 1000,
  });

  return (
    <>
      <Layout>
        {activeFilter && <Filter date={date} onChange={setSate} />}
        <JogsWrapper
          jogsList={activeFilter ? filterList : jogsState}
          openModal={setVisible}
        />
        <CreateJogButton
          className={classNames(styles.addButton, {
            [styles.addButton_visible]: isJogPage && jogs,
          })}
          openModal={setVisible}
        >
          <img src={add} alt="add jog" />
        </CreateJogButton>
      </Layout>
      <JogFormModal open={visible} onClose={() => setVisible(false)} />
    </>
  );
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  jogs: jogsSelect(state),
  sortDateJogs: sortDateJogsSelect(state),
  activeFilter: visibleFilterSelect(state),
  filter: props => filterJogsSelect(state, props),
});

const mapDispatchToProps = dispatch => ({
  getJogs: () => dispatch(jogsActions.getJogs()),
  setActiveFilter: visible => dispatch(jogsActions.activeFilter(visible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Jogs));

Jogs.propTypes = {
  pathname: PropTypes.string.isRequired,
  getJogs: PropTypes.func.isRequired,
  jogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      distance: PropTypes.number,
      time: PropTypes.number,
      date: PropTypes.number,
    })
  ),
  activeFilter: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
  sortDateJogs: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }),
};
