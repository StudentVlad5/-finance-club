import React from 'react';
import { FiSun } from 'react-icons/fi';
import { HiMoon } from 'react-icons/hi';
import { BtnChangeTheme, SwitcherWrapper } from './SwitchTheme.styled';
import { ThemeContext } from 'components/ThemeStatus/ThemeProvider';

export const SwitchTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setMode }) => (
        <SwitcherWrapper>
          <BtnChangeTheme type="button" aria-label='change theme'
            onClick={() =>
              theme === 'light' ? setMode('dark') : setMode('light')
            }
          >
            {theme === 'light' ? (
              <FiSun size={18} alt="light theme" />
            ) : (
              <HiMoon size={18} alt="dark theme" />
            )}
          </BtnChangeTheme>
        </SwitcherWrapper>
      )}
    </ThemeContext.Consumer>
  );
};
