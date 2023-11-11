import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';

export const Btn = ({ children }) => {
  return (
    <Button>
      {children}
    </Button>
  );
};

Btn.propTypes = {
  children: PropTypes.string,
};
