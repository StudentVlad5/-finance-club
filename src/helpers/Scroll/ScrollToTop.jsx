import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import theme from 'components/baseStyles/Variables.styled';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      top="400"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: `${theme.colors.green}`,
        color: `${theme.colors.white}`,
      }}
      component={<MdKeyboardDoubleArrowUp size={30} />}
    />
  );
};

export { ScrollTop };
