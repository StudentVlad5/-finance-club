import React, { createContext, useState } from 'react';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import PropTypes from 'prop-types';


export const StatusContext = createContext();

export const StatusProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    getFromStorage('chosenLanguage') || 'en',
  );

  if (!getFromStorage('chosenLanguage')) {
    saveToStorage('chosenLanguage', 'en');
  }
  return (
    <StatusContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};

StatusProvider.propTypes = {
  children: PropTypes.any
};
