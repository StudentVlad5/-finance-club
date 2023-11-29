import React, { useEffect, useState } from 'react';
import { SelectContainerLanguage, SelectLanguage } from './Language.styled';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('chosenLanguage') || 'en',
  );

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
