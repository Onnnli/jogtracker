import React, { useCallback, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '../buttons/Button';
import JogFormModal from '../../containers/JogFormModal/JogFormModal';
import { jogsActions } from '../../redux/jogs/jogsActions';

import icon from '../../images/icon.svg';

import styles from './Jog.module.css';

const Jog = ({ distance, time, date, ...props }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const formatDate = moment.unix(date).format('DD.MM.YYYY');

  const updateJogHandler = useCallback(() => {
    setVisible(true);
  }, []);

  const deleteJogHandler = useCallback(() => {
    dispatch(jogsActions.deleteJog(props.id, props.user_id));
  }, [dispatch, props.id, props.user_id]);

  return (
    <>
      <div className={styles.jog}>
        <div className={styles.jog__image}>
          <img src={icon} alt="jog" />
        </div>
        <div className={styles.jog__info}>
          <p>{formatDate}</p>
          <p>
            Speed: <span>15</span>
          </p>
          <p>
            Distance: <span> {distance} km </span>
          </p>
          <p>
            Time: <span> {time} min </span>
          </p>
        </div>
        <div className={styles.buttons__block}>
          <Button className={styles.buttons__update} onClick={updateJogHandler}>
            update
          </Button>
          <Button className={styles.buttons__delete} onClick={deleteJogHandler}>
            delete
          </Button>
        </div>
      </div>
      <JogFormModal
        updateValues={{
          ...props,
          distance,
          date: new Date(date * 1000),
          time,
        }}
        open={visible}
        onClose={() => setVisible(false)}
      />
    </>
  );
};

export default Jog;

Jog.propTypes = {
  distance: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
};
