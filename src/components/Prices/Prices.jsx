import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  PriceSection,
  PriceContainer,
  ListItemsOfPacked,
  ContainerNavigation,
  BtnSlider,
  ListItemsContainer,
  ListItems,
  TitleItem,
  SubTitle,
  ListItemsUppertitle,
  SubTitleItem,
  ListItemsContentWraper,
  UlContent,
  LiContent,
  ButtonBuy,
  ListItemsContainerForSwiper,
} from './Prices.styled';

const data = [
  {
    title: 'Basic',
    price: '$ 100 USD',
    content:
      'Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh',
    features: ['Everything included in Basic', 'Trading up to $1MM per month', 'Windows & macOS App', 'Premium Support'],
  },
  {
    title: 'Pro',
    price: '$ 200 USD',
    content:
      'Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh',
    features: ['Everything included in Pro', 'Trading up to $1MM per month', 'Windows & macOS App', 'Premium Support'],
  },
  {
    title: 'Expert',
    price: '$ 300 USD',
    content:
      'Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh',
    features: ['Everything included in Expert', 'Trading up to $1MM per month', 'Windows & macOS App', 'Premium Support'],
  },
];

const Prices = () => {
  // const { t } = useTranslation();
  return (
    <PriceSection>
      <PriceContainer>
          <ListItemsUppertitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
            Prices
          </ListItemsUppertitle>
          <SubTitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
          </SubTitle>
            <ListItemsContainer>
                  {data.map(it=>
                          <ListItems key={it.title}>
                            <ListItemsContentWraper>
                              <ListItemsOfPacked>{it.title}</ListItemsOfPacked>
                              <TitleItem>{it.price}</TitleItem>
                              <SubTitleItem>{it.content}</SubTitleItem>
                                 <UlContent>features
                                {it?.features.map((item, i)=>
                                <LiContent key={item + i}>{item}</LiContent>)}
                              </UlContent>
                              <ButtonBuy type='button' aria-label="buy now">Buy now</ButtonBuy>
                            </ListItemsContentWraper>
                          </ListItems>)}
            </ListItemsContainer>
            <ListItemsContainerForSwiper>
                    <Swiper
                            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            grabCursor={true}
                            navigation={{
                              prevEl: '.swiper-button-pr',
                              nextEl: '.swiper-button-nt',
                            }}
                            pagination={{ clickable: false }}
                            mousewheel={true}
                            keyboard={true}
                            loop={true}
                            loopPreventsSliding={true}
                            // loopedSlides={1}
                            // autoplay={{ delay: 1000 }}
                            effect={'creative'}
                          >
                            {' '}
                          {data.map(it=><SwiperSlide key={it.title}>
                                <ListItems>
                                  <ListItemsContentWraper>
                                    <ListItemsOfPacked>{it.title}</ListItemsOfPacked>
                                    <TitleItem>{it.price}</TitleItem>
                                    <SubTitleItem>{it.content}</SubTitleItem>
                                        <UlContent>features
                                      {it?.features.map((item, i)=>
                                      <LiContent key={item + i}>{item}</LiContent>)}
                                    </UlContent>
                                    <ButtonBuy type='button' aria-label="buy now">Buy now</ButtonBuy>
                                  </ListItemsContentWraper>
                                </ListItems>
                              </SwiperSlide>
                            )}
                    </Swiper>
            </ListItemsContainerForSwiper>
                  <ContainerNavigation>
                    <BtnSlider className="swiper-button-pr">
                      <MdKeyboardArrowLeft className="buttonSlide" />
                    </BtnSlider>
                    <BtnSlider className="swiper-button-nt">
                      <MdKeyboardArrowRight className="buttonSlide" />
                    </BtnSlider>
                  </ContainerNavigation>
      </PriceContainer>
    </PriceSection>
  );
};

export default Prices;
