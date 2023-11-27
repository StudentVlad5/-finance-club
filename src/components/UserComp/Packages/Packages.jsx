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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
// import { data } from "components/Prices/Prices";

export const Packages = () => {
  const { t } = useTranslation();
  const packages = useSelector(getUser).packages;

  const data = [
    {
      title: 'Basic',
      price: '$ 100 USD',
      content: t(
        'A basic package for beginners who want to try their hand at the world of finance. Includes everything necessary for comfortable and reliable work.',
      ),
      features: [
        t('Limited access to selected investment opportunities.'),
        t('Key webinars and training programs.'),
        t('Ability to share ideas in the core community.'),
        t("General priority access to the club's support service."),
      ],
    },
    {
      title: 'Pro',
      price: '$ 200 USD',
      content: t(
        'A professional package for those who are already familiar with financial technologies and are ready for serious investments.',
      ),
      features: [
        t('Enhanced access to selected investment opportunities.'),
        t("Personal consultations from the club's financial experts."),
        t(
          'Invitations to exclusive events and meetings with key financial figures.',
        ),
        t('Access to specialized financial tools and analytics.'),
        t('Exclusive webinars and training programs.'),
        t("Priority access to the club's support service."),
      ],
    },
    {
      title: 'Expert',
      price: '$ 300 USD',
      content: t(
        'A expert package for professionals in the world of finance. Access to unique opportunities and personal support for maximum comfort.',
      ),
      features: [
        t('Full access to selected investment opportunities.'),
        t("Regular personal consultations from the club's financial experts."),
        t('Priority invitations to exclusive events and meetings.'),
        t('Exclusive access to specialized financial tools and analytics.'),
        t('Personalized and advanced financial education materials.'),
        t('Personal contact to resolve issues.'),
        t(
          'Premium forum and chat for exclusive communication with other club experts.',
        ),
      ],
    },
  ];

  return (
    <ListItemsContainer style={{ display: 'flex' }}>
      {data.map(it =>
        packages.map(item => {
          if (it.title === item) {
            return (
              <ListItems key={item}>
                <ListItemsContentWraper>
                  <ListItemsOfPacked>{it.title}</ListItemsOfPacked>
                  <SubTitleItem>{it.content}</SubTitleItem>
                  <UlContent>
                    features
                    {it?.features.map((item, i) => (
                      <LiContent key={item + i}>{item}</LiContent>
                    ))}
                  </UlContent>
                  <ButtonBuy type="button" aria-label="Change package">
                    Change package
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
