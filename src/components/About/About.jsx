import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import open_source from 'images/about/open_source.svg';
import community_driven from 'images/about/community_driven.svg';
import transparent from 'images/about/transparent.svg';
import worldwide from 'images/about/worldwide.svg';
import {
  AboutSection,
  AboutContainer,
  ContainerNavigation,
  ListOfItem,
  ListItemsContainer,
  ListItemsImgContainer,
  ListItemsImg,
  ListItems,
  ListItemsTitle,
  SubTitle,
  ListItemsUppertitle,
  SubTitleItem,
  ListItemsContentWraper,
  ListOfItemNext,
  Btn,
  ListItemsContainerForSwiper,
} from './About.styled';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: 'Open Source',
      content: t(
        "In our open finance club, we strive for innovation and collaboration. Here, you'll find solutions that are open to everyone, fostering a dynamic exchange of ideas and improvements.",
      ),
      img: open_source,
    },
    {
      title: 'Transparente',
      content: t(
        'Our closed financial club prides itself on transparency in all matters. We disclose information in detail to ensure honesty and mutual understanding among participants.',
      ),
      img: transparent,
    },
    {
      title: 'Worldwide',
      content: t(
        'The club spans all corners of the world, bringing together a community of representatives from different countries. A global perspective helps us understand and leverage diversity to achieve high results.',
      ),
      img: worldwide,
    },
    {
      title: 'Community driven',
      content: t(
        'Our community adds strength and determination to every aspect. Collaborative problem-solving and public support are at the core of our philosophy of management and development.',
      ),
      img: community_driven,
    },
  ];

  return (
    <AboutSection>
      <AboutContainer>
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: false }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          // loopPreventsSliding={true}
          autoplay={{ delay: 5000 }}
          effect={'creative'}
        >
          <SwiperSlide>
            <ListOfItem>
              <ListItemsUppertitle
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {t('About us')}
              </ListItemsUppertitle>
              <SubTitle
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {t(
                  'Innovative financial company that offers exclusive services in a private financial club.',
                )}
                <br />
                {t(
                  'We provide convenient and advanced solutions for the success of our clients.',
                )}
              </SubTitle>
              <ListItemsContainer>
                {data.map(it => (
                  <ListItems key={it.title}>
                    <ListItemsImgContainer>
                      <ListItemsImg src={it.img} alt={it.title} />
                    </ListItemsImgContainer>
                    <ListItemsContentWraper>
                      <ListItemsTitle>{it.title}</ListItemsTitle>
                      <SubTitleItem>{it.content}</SubTitleItem>
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
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                  pagination={{ clickable: false }}
                  mousewheel={true}
                  keyboard={true}
                  loop={true}
                  // loopPreventsSliding={true}
                  autoplay={{ delay: 2000 }}
                  effect={'creative'}
                >
                  {' '}
                  {data.map(it => (
                    <SwiperSlide key={it.title}>
                      <ListItems
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <ListItemsImgContainer>
                          <ListItemsImg src={it.img} alt={it.title} />
                        </ListItemsImgContainer>
                        <ListItemsContentWraper>
                          <ListItemsTitle>{it.title}</ListItemsTitle>
                          <SubTitleItem>{it.content}</SubTitleItem>
                        </ListItemsContentWraper>
                      </ListItems>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ListItemsContainerForSwiper>
            </ListOfItem>
          </SwiperSlide>
          <SwiperSlide>
            <ListOfItemNext>
              <ListItemsUppertitle
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {t('Our story')}
              </ListItemsUppertitle>
              <SubTitle>
                SoFi -{' '}
                {t(
                  "is a pioneering company in the realm of closed financial clubs, providing exclusive insights and opportunities. Our closed financial club operates as a hub of knowledge, welcoming only CEOs to ensure high-level interactions. We don't just develop; we curate an environment where CEOs learn to navigate effectively.",
                )}
              </SubTitle>
              <SubTitle>
                {t(
                  'Our exclusive gatherings bring CEOs together, fostering a community driven by shared insights and unparalleled expertise. With a transparent and worldwide approach, SoFi stands as a testament to community-driven success in the closed financial sector.',
                )}
              </SubTitle>
            </ListOfItemNext>
          </SwiperSlide>
          <SwiperSlide>
            <ListOfItemNext>
              <ListItemsUppertitle
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {t('Our mission')}
              </ListItemsUppertitle>
              <SubTitle>
                SoFi{' '}
                {t(
                  'aims to take a leading position in the realm of exclusive financial clubs. Our mission is to create a platform exclusively for CEOs, allowing them to leverage high-level expertise and develop effective managerial skills. Through transparent and global approaches, we foster knowledge exchange and shape a global community of business leaders.',
                )}
              </SubTitle>
              <SubTitle>
                {t(
                  'SoFi aspires to excellence in the financial world, creating an innovative environment where leaders come together to unleash their potential. Our mission is to support CEOs in achieving success and leaving a lasting impact in their industries.',
                )}
              </SubTitle>
            </ListOfItemNext>
          </SwiperSlide>
        </Swiper>
        <ContainerNavigation>
          <Btn className="swiper-button-prev">
            <MdKeyboardArrowLeft className="buttonSlide" />
          </Btn>
          <Btn className="swiper-button-next">
            <MdKeyboardArrowRight className="buttonSlide" />
          </Btn>
        </ContainerNavigation>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
