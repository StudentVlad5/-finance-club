import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxDividerVertical } from 'react-icons/rx';
import { Button } from './ButtonSplit.styled';

export const ButtonSplit = ({ children }) => {
  return (
    <Button>
      {children}
      <div>
        <RxDividerVertical size="24" />
        <MdOutlineKeyboardArrowDown size="24" />
      </div>
    </Button>
  );
};

ButtonSplit.propTypes = {
  children: PropTypes.string,
};
