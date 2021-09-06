import React from 'react';
import PropTypes from 'prop-types';

import JogForm from '../../components/forms/JogForm/JogForm';
import Button from '../../components/buttons/Button';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';

import cancel from '../../images/cancel.svg';

import styles from './JogFormModal.module.css';

const JogFormModal = ({ open, onClose, updateValues }) => {
  return (
    <Modal show={open}>
      <Layout>
        <div className={styles.content}>
          <div
            className={styles.form__wrapper}
            onClick={e => e.stopPropagation()}
          >
            <Button onClick={onClose} className={styles.button__cancel}>
              <img src={cancel} alt="cancel" />
            </Button>
            <JogForm updateValues={updateValues} onClose={onClose} />
          </div>
        </div>
      </Layout>
    </Modal>
  );
};

export default JogFormModal;

JogFormModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  updateValues: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.string,
    distance: PropTypes.number,
    time: PropTypes.number,
    date: PropTypes.number,
  }),
};
