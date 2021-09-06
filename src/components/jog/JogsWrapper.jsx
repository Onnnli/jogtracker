import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Jog from './Jog';
import Empty from '../empty/Empty';
import CreateJogButton from '../buttons/CreateJogButton/CreateJogButton';

import styles from './Jog.module.css';

const JogsWrapper = ({ jogsList, openModal }) => {
  if (!jogsList.length) {
    return (
      <Empty>
        <CreateJogButton openModal={openModal} className={styles.button__empty}>
          Create your jog first
        </CreateJogButton>
      </Empty>
    );
  }
  return (
    <div className={styles.jogs__wrapper}>
      {jogsList.map(jog => (
        <Jog key={jog.id} {...jog} />
      ))}
    </div>
  );
};

export default memo(JogsWrapper);

JogsWrapper.propTypes = {
  openModal: PropTypes.func.isRequired,
  jogsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.string,
      distance: PropTypes.number,
      time: PropTypes.number,
      date: PropTypes.number,
    })
  ),
};
