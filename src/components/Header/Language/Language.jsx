import React, { useContext, useEffect } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './Language.styled';
import { useTranslation } from 'react-i18next';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { getFromStorage, saveToStorage } from 'services/localStorService';

const Language = () => {
  const { i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    const saveLanguage = getFromStorage('chosenLanguage');
    if (saveLanguage) {
      i18n.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
    } else {saveToStorage('chosenLanguage', 'en');}
  }, [i18n]);

  const changeLanguage = event => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    saveToStorage('chosenLanguage', language);
    setSelectedLanguage(language);
  };

  return (
    <SelectContainerLanguage>
      <SelectLanguage onChange={changeLanguage} value={selectedLanguage}>
        <option value="en" label = "En">En</option>
        <option value="ua" label = "Ua">Ua</option>
        <option value="de" label = "De">De</option>
      </SelectLanguage>
    </SelectContainerLanguage>
  );
};

export default Language;
