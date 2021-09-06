import React from 'react';
import { connect } from 'react-redux';

import Empty from '../components/empty/Empty';
import Layout from '../components/layout/Layout';
import Button from '../components/buttons/Button';
import Container from '../components/layout/container/Container';
import { userActions } from '../redux/user/userActions';

import buttonStyles from '../components/buttons/Button.module.css';
import PropTypes from 'prop-types';

const Contact = ({ logout }) => (
  <Layout>
    <Container>
      <Empty />
      <Button onClick={logout} className={buttonStyles.button__logout}>
        Logout
      </Button>
    </Container>
  </Layout>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userActions.logoutUser()),
});

export default connect(null, mapDispatchToProps)(Contact);

Contact.propTypes = {
  logout: PropTypes.func.isRequired,
};
