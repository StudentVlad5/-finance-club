
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
  SubTitleSection
} from './Adventages.styled';
import send_receive from 'images/adventages/send_receive.svg'
import real_time_trading from 'images/adventages/real_time_trading.svg'
import secure_wallet from 'images/adventages/secure_wallet.svg'
import iphone from 'images/adventages/Iphone.svg'
import trading_charts from 'images/adventages/trading_charts.svg'

// .div1 { grid-area: 1 / 1 / 2 / 2; }
// .div2 { grid-area: 2 / 1 / 3 / 2; }
// .div3 { grid-area: 1 / 2 / 3 / 3; }
// .div4 { grid-area: 1 / 3 / 2 / 4; }
// .div5 { grid-area: 2 / 3 / 3 / 4; }

const data = [
  {
    title: 'Send & Receive',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.',
    img: send_receive,
    grid: '1 / 1 / 2 / 2',
  },
  {
    title: '100% Secure Wallet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.',
    img: secure_wallet,
    grid: '2 / 1 / 3 / 2',
  },
  {
    title: 'iOS & Android App',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.',
    img: iphone,
    grid: '1 / 2 / 3 / 3',
  },
  {
    title: 'Trading Charts',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.',
    img: trading_charts,
    grid: '1 / 3 / 2 / 4',
  },
  {
    title: 'Real Time Trading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.',
    img: real_time_trading,
    grid: '2 / 3 / 3 / 4',
  },
];

const Adventages = () => {
  // const { t } = useTranslation();

  return (
    <AdventagesSection>
      <AdventagesContainer>
      <ListItemsUppertitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
            Build your crypto portfolio
          </ListItemsUppertitle>
          <SubTitleSection
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
          </SubTitleSection>
        <ListItemsContainer>
          {data.map((it, ind)=> ind !== 2 ?
          <ListItems key={it.title} style={{gridArea:it.grid}}>
            <ListItemsImgContainer>
              <ListItemsImg src={it.img} alt={it.title} />
            </ListItemsImgContainer>
            <ListItemsContentWraper>
              <ListItemsTitle>{it.title}</ListItemsTitle>
              <SubTitle>{it.content}</SubTitle>
            </ListItemsContentWraper>
          </ListItems> : 
          <ListItemsBig key={it.title} style={{gridArea:it.grid}}>
            <ListItemsContentWraper>
              <ListItemsTitle>{it.title}</ListItemsTitle>
              <SubTitle>{it.content}</SubTitle>
              <ListItemsImgContainerBig>
                <ListItemsImgBig src={it.img} alt={it.title} />
              </ListItemsImgContainerBig>
            </ListItemsContentWraper>
          </ListItemsBig>
          )}

        </ListItemsContainer>
      </AdventagesContainer>
    </AdventagesSection>
  );
};

export default Adventages;
