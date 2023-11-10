import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import { useTranslation } from 'react-i18next';
// import 'swiper/css/navigation';
import 'swiper/css';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"

import open_source from 'images/about/open_source.svg';
import community_driven from 'images/about/community_driven.svg';
import transparent from 'images/about/transparent.svg';
import worldwide from 'images/about/worldwide.svg';
import {AboutSection, AboutContainer, ContainerNavigation, ListOfItem, ListItemsContainer, ListItemsImgContainer, ListItemsImg, ListItems, ListItemsTitle, SubTitle, ListItemsUppertitle, SubTitleItem, ListItemsContentWraper, ListOfItemNext, Btn} from './About.styled';
import { theme } from 'components/baseStyles/Variables.styled';

const data = [
  {title:'Open Source',
  content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.',
  img: open_source },
  {title:'Transparente',
  content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.',
  img: transparent },
  {title:'Worldwide',
  content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.',
  img: worldwide },
  {title:'Community driven',
  content :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.',
  img: community_driven },
]

const About = () => {
  // const { t } = useTranslation();
 console.log("innerWidth",window.innerWidth)
 console.log("theme.breakpoints.mobile",theme.breakpoints.mobile.slice(0,-2))
 console.log("window.innerWidth < theme.breakpoints.mobile", window.innerWidth < theme.breakpoints.mobile)

  return (
    <AboutSection>
      <AboutContainer>
        <Swiper
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: false }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          loopPreventsSliding={true}
          loopedSlides={1}
          autoplay = {{delay: 5000}}
          effect={'creative'}
        >
          <SwiperSlide>
          <ListOfItem>
          <ListItemsUppertitle 
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">About us</ListItemsUppertitle>
          <SubTitle data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br />
            Feugiat nulla suspendisse tortor aene.
          </SubTitle>
          <ListItemsContainer>
            {window.innerWidth >= theme.breakpoints.tablet.slice(0,-2) ? data.map(it=>
              <ListItems key={it.title}>
                <ListItemsImgContainer>
                <ListItemsImg src = {it.img} alt={it.title}/>
                </ListItemsImgContainer>
                <ListItemsContentWraper>
                  <ListItemsTitle>{it.title}</ListItemsTitle>
                  <SubTitleItem>{it.content}</SubTitleItem>
                </ListItemsContentWraper>
              </ListItems>) : 
            <Swiper
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: false }}
            mousewheel={true}
            keyboard={true}
            loop={true}
            loopPreventsSliding={true}
            loopedSlides={1}
            autoplay = {{delay: 1000}}
            effect={'creative'}
          >   {data.map(it=>
              <SwiperSlide key={it.title}>
              <ListItems  data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
                <ListItemsImgContainer>
                <ListItemsImg src = {it.img} alt={it.title}/>
                </ListItemsImgContainer>
                <ListItemsContentWraper>
                  <ListItemsTitle>{it.title}</ListItemsTitle>
                  <SubTitleItem>{it.content}</SubTitleItem>
                </ListItemsContentWraper>
              </ListItems>
              </SwiperSlide>)}
          </Swiper>
            }
          </ListItemsContainer>
        </ListOfItem>
          </SwiperSlide>
          <SwiperSlide>
          <ListOfItemNext>
          <ListItemsUppertitle           
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">Our story</ListItemsUppertitle>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</SubTitle> 
          <SubTitle>Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis.</SubTitle>
        </ListOfItemNext>
          </SwiperSlide>
          <SwiperSlide>
          <ListOfItemNext>
          <ListItemsUppertitle 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >Our mission</ListItemsUppertitle>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</SubTitle>
          <SubTitle>ulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</SubTitle>
        </ListOfItemNext>
          </SwiperSlide>
        </Swiper>
        <ContainerNavigation>
          <Btn className='swiper-button-prev'><MdKeyboardArrowLeft className='buttonSlide'/></Btn>
          <Btn className='swiper-button-next'><MdKeyboardArrowRight className='buttonSlide'/></Btn>
        </ContainerNavigation>
      </AboutContainer>
    </AboutSection>
  );
};

export default About
