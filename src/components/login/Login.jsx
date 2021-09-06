import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../buttons/Button';
import BearFace from '../../images/BearFace';
import { userActions } from '../../redux/user/userActions';

import styles from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = useCallback(() => {
    dispatch(userActions.loginUser());
  }, [dispatch]);

  return (
    <div className={styles.login}>
      <BearFace />
      <Button className={styles.login__button} onClick={loginHandler}>
        Let me in
      </Button>
    </div>
  );
};

export default Login;
