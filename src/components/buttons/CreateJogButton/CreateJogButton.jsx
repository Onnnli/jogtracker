import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

const CreateJogButton = ({ openModal, children, ...props }) => (
  <Button onClick={() => openModal(true)} {...props}>
    {children}
  </Button>
);

export default CreateJogButton;

CreateJogButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};
