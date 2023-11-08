import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
// import { useTranslation } from 'react-i18next';
// import 'swiper/css/navigation';
import 'swiper/css';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"
import css from './about.module.scss';
import open_source from 'images/about/open_source.svg'
import community_driven from 'images/about/community_driven.svg'
import transparent from 'images/about/transparent.svg'
import worldwide from 'images/about/worldwide.svg'



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
  return (
    <section className={'about' + ' ' + css.section} id='about'>
      <div className={'about__container' + ' ' + css.container}>
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
          autoplay = {true}
          effect={'creative'}
        >
          <SwiperSlide>
          <div className={css.about__list}>
          <h1 className={css.uppertitle}>About us</h1>
          <p className={css.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br />
            Feugiat nulla suspendisse tortor aene.
          </p>
          <ul className={css.about__listItemsContainer}>
            {data.map(it=>
              <li key={it.title} className={css.about__listItems}>
                <div className={css.about__listItemsImgContainer}>
                  <img className={css.about__listItemsImg} src = {it.img} alt={it.title}/>
                </div>
                <div>
                  <h2 className={css.about__listItemsTitle}>{it.title}</h2>
                  <p className={css.about__listItemsSubTitle}>{it.content}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={css.about__list}>
          <h1 className={css.uppertitle}>Our story</h1>
          <p className={css.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p> 
          <p className={css.subTitle}>Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis.</p>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={css.about__list}>
          <h1 className={css.uppertitle}>Our mission</h1>
          <p className={css.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.</p>
          <p className={css.subTitle}>ulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.</p>
        </div>
          </SwiperSlide>
        </Swiper>
        <div className={css.about__containerNavigation}>
          <div className={css.about__BtnPrev + ' swiper-button-prev'}><MdKeyboardArrowLeft className={css.buttonSlide}/></div>
          <div className={css.about__BtnNext + ' swiper-button-next'}><MdKeyboardArrowRight className={css.buttonSlide}/></div>
        </div>
      </div>
    </section>
  );
};

export default About;
