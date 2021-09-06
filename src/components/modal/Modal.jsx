import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const Modal = ({ children, show }) =>
  show &&
  ReactDOM.createPortal(
    <div className={styles.portal}> {children} </div>,
    document.getElementById('root')
  );

export default Modal;

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
};

Modal.defaultValue = {
  show: false,
};
