import React from 'react';

import Layout from '../components/layout/Layout';
import Container from '../components/layout/container/Container';
import Login from '../components/login/Login';

import styles from '../components/login/Login.module.css';

const Main = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.content}>
          <Login />
        </div>
      </Container>
    </Layout>
  );
};

export default Main;
