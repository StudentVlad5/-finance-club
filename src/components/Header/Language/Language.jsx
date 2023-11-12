import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { SelectContainerLanguage, LabelLanguage } from './Language.styled';

const Language = () => {
  const [, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const saveLanguage = localStorage.getItem('chosenLanguage');
    if (saveLanguage) {
      // i18next.changeLanguage(saveLanguage);
      setSelectedLanguage(saveLanguage);
      document.querySelectorAll(".language").forEach(it => {if(it.dataset.leng === saveLanguage){it.classList.add('active')}else{it.classList.remove('active')}});
    }
  }, []);

  const changeLanguage = (e) => {
    e.preventDefault();
    const languageItemList = document.querySelectorAll(".language");
    if(languageItemList){languageItemList.forEach(it => {if(it.dataset.leng === e.target.dataset.leng){it.classList.add('active')}else{it.classList.remove('active')}})};
    // i18next.changeLanguage(e.target.dataset.leng);
    localStorage.setItem('chosenLanguage', e.target.dataset.leng);
    setSelectedLanguage(e.target.dataset.leng);
  };

  return (
    <SelectContainerLanguage>
      <LabelLanguage data-leng="en" className="language" onClick={(e)=>changeLanguage(e)}>EN</LabelLanguage>
      <LabelLanguage data-leng="ua" className="language active" onClick={(e)=>changeLanguage(e)}>UA</LabelLanguage> 
    </SelectContainerLanguage>
  );
};

export default Language;
