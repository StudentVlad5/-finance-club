import React, { useContext, useEffect } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './Language.styled';
import { useTranslation } from 'react-i18next';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

const Language = () => {
  const { i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    const saveLanguage = localStorage.getItem('chosenLanguage');
    if (saveLanguage) {
      i18n.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
    } else {localStorage.setItem('chosenLanguage', 'en');}
  }, [i18n]);

  const changeLanguage = event => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem('chosenLanguage', language);
    setSelectedLanguage(language);
  };

  return (
    <SelectContainerLanguage>
      <SelectLanguage onChange={changeLanguage} value={selectedLanguage}>
        <option value="en">En</option>
        <option value="ua">Ua</option>
        <option value="de">De</option>
      </SelectLanguage>
    </SelectContainerLanguage>
  );
};

export default Language;
