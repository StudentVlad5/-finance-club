import {
  ListItemsContainer,
  ListItems,
  ListItemsOfPacked,
  ListItemsContentWraper,
  SubTitleItem,
  UlContent,
  LiContent,
  ButtonBuy,
} from 'components/Prices/Prices.styled';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
import { useContext, useEffect, useState } from 'react';
import { fetchData } from 'services/APIservice';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

export const Packages = () => {
  const { t } = useTranslation();

  const packages = useSelector(getUser).packages;
  const [packagesList, setPackagesList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { selectedLanguage } = useContext(StatusContext);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/packages`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setPackagesList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <ListItemsContainer style={{ display: 'flex' }}>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      {packagesList.map(it =>
        packages.map(item => {
          if (it[selectedLanguage].title === item.name) {
            return (
              <ListItems key={item}>
                <ListItemsContentWraper>
                  <ListItemsOfPacked>{it[selectedLanguage].title}</ListItemsOfPacked>
                  <SubTitleItem>{it[selectedLanguage].content}</SubTitleItem>
                  <UlContent>
                    features
                    {it[selectedLanguage]?.features.map((item, i) => (
                      <LiContent key={item + i}>{item}</LiContent>
                    ))}
                  </UlContent>
                  <ButtonBuy type="button" aria-label="Change package">
                    {t('Change package')}
                  </ButtonBuy>
                </ListItemsContentWraper>
              </ListItems>
            );
          }
        }),
      )}
    </ListItemsContainer>
  );
};
