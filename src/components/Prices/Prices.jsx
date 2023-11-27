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
import { useTranslation } from 'react-i18next';

const Prices = () => {
  const { t } = useTranslation();

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
    <PriceSection id="prices">
      <PriceContainer>
        <ListItemsUppertitle
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {t('Prices')}
        </ListItemsUppertitle>
        <SubTitle
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {t("We offer a variety of packages, our company carefully approaches the formation of offers to meet the diverse needs of our customers.")}
        </SubTitle>
        <ListItemsContainer>
          {data.map(it => (
            <ListItems key={it.title}>
              <ListItemsContentWraper>
                <ListItemsOfPacked>{it.title}</ListItemsOfPacked>
                <TitleItem>{it.price}</TitleItem>
                <SubTitleItem>{it.content}</SubTitleItem>
                <UlContent>
                  {t("features")}
                  {it?.features.map((item, i) => (
                    <LiContent key={item + i}>{item}</LiContent>
                  ))}
                </UlContent>
                <ButtonBuy type="button" aria-label="buy now">
                  {t("Buy now")}
                </ButtonBuy>
              </ListItemsContentWraper>
            </ListItems>
          ))}
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
            {data.map(it => (
              <SwiperSlide key={it.title}>
                <ListItems>
                  <ListItemsContentWraper>
                    <ListItemsOfPacked>{it.title}</ListItemsOfPacked>
                    <TitleItem>{it.price}</TitleItem>
                    <SubTitleItem>{it.content}</SubTitleItem>
                    <UlContent>
                    {t("features")}
                      {it?.features.map((item, i) => (
                        <LiContent key={item + i}>{item}</LiContent>
                      ))}
                    </UlContent>
                    <ButtonBuy type="button" aria-label="buy now">
                    {t("Buy now")}
                    </ButtonBuy>
                  </ListItemsContentWraper>
                </ListItems>
              </SwiperSlide>
            ))}
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
