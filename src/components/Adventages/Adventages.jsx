import {
  AdventagesSection,
  AdventagesContainer,
  ListItemsContainer,
  ListItems,
  ListItemsImgContainer,
  ListItemsImg,
  ListItemsContentWraper,
  ListItemsTitle,
  SubTitle,
  ListItemsBig,
  ListItemsImgBig,
  ListItemsImgContainerBig,
  ListItemsUppertitle,
  SubTitleSection,
} from './Adventages.styled';
import send_receive from 'images/adventages/send_receive.svg';
import real_time_trading from 'images/adventages/real_time_trading.svg';
import secure_wallet from 'images/adventages/secure_wallet.svg';
import iphone from 'images/adventages/Iphone.svg';
import trading_charts from 'images/adventages/trading_charts.svg';
import { useTranslation } from 'react-i18next';

// .div1 { grid-area: 1 / 1 / 2 / 2; }
// .div2 { grid-area: 2 / 1 / 3 / 2; }
// .div3 { grid-area: 1 / 2 / 3 / 3; }
// .div4 { grid-area: 1 / 3 / 2 / 4; }
// .div5 { grid-area: 2 / 3 / 3 / 4; }

const Adventages = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t('Send & Receive'),
      content: t(
        'Effortlessly manage your transactions with our Send & Receive feature.',
      ),
      img: send_receive,
      grid: '1 / 1 / 2 / 2',
    },
    {
      title: t('100% Secure Wallet'),
      content: t(
        'Trust in the security of your assets through our 100% Secure Wallet.',
      ),
      img: secure_wallet,
      grid: '2 / 1 / 3 / 2',
    },
    {
      title: t('iOS & Android App'),
      content: t(
        'Access your financial world on the go with our iOS & Android App.',
      ),
      img: iphone,
      grid: '1 / 2 / 3 / 3',
    },
    {
      title: t('Trading Charts'),
      content: t('Make informed decisions with our detailed Trading Charts.'),
      img: trading_charts,
      grid: '1 / 3 / 2 / 4',
    },
    {
      title: t('Real Time Trading'),
      content: t('Seize the moment with our Real-Time Trading feature.'),
      img: real_time_trading,
      grid: '2 / 3 / 3 / 4',
    },
  ];

  return (
    <AdventagesSection>
      <AdventagesContainer>
        <ListItemsUppertitle
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {t('Build your crypto portfolio')}
        </ListItemsUppertitle>
        <SubTitleSection
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {t(
            'Create and manage your cryptocurrency investments effortlessly with our user-friendly platform. Experience seamless transactions and stay ahead in the crypto market.',
          )}
        </SubTitleSection>
        <ListItemsContainer>
          {data.map((it, ind) =>
            ind !== 2 ? (
              <ListItems key={it.title} style={{ gridArea: it.grid }}>
                <ListItemsImgContainer>
                  <ListItemsImg src={it.img} alt={it.title} />
                </ListItemsImgContainer>
                <ListItemsContentWraper>
                  <ListItemsTitle>{it.title}</ListItemsTitle>
                  <SubTitle>{it.content}</SubTitle>
                </ListItemsContentWraper>
              </ListItems>
            ) : (
              <ListItemsBig key={it.title} style={{ gridArea: it.grid }}>
                <ListItemsContentWraper>
                  <ListItemsTitle>{it.title}</ListItemsTitle>
                  <SubTitle>{it.content}</SubTitle>
                  <ListItemsImgContainerBig>
                    <ListItemsImgBig src={it.img} alt={it.title} />
                  </ListItemsImgContainerBig>
                </ListItemsContentWraper>
              </ListItemsBig>
            ),
          )}
        </ListItemsContainer>
      </AdventagesContainer>
    </AdventagesSection>
  );
};

export default Adventages;
