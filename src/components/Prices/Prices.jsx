import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { openModalWindow } from 'hooks/modalWindow';
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
import { addModal } from 'redux/modal/operation';
import { RegisterModal } from 'components/HowToJoin/RegisterModal/RegisterModal';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'helpers/Loader/Loader';
import { fetchData } from 'services/APIservice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Prices = () => {
  const { t } = useTranslation();

  const [packages, setPackages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/packages`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        setPackages(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'member_registration') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 200);
    }
  };

  return (
    <>
      <PriceSection id="prices">
        <PriceContainer>
          <ListItemsUppertitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {t("Prices")}
          </ListItemsUppertitle>
          <SubTitle
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {t("We offer a variety of packages, our company carefully approaches the formation of offers to meet the diverse needs of our customers.")}
          </SubTitle>
          <ListItemsContainer>
            {isLoading ? onLoading() : onLoaded()}
            {error && onFetchError('Whoops, something went wrong')}
            {packages.map(it => (
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
                  <ButtonBuy
                    type="button"
                    aria-label="buy now"
                    onClick={e => {
                      openModal(e);
                    }}
                    data-modal="member_registration"
                  >
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
              {packages.map(it => (
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
                      <ButtonBuy
                        type="button"
                        aria-label="buy now"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="member_registration"
                      >
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
      <RegisterModal />
    </>
  );
};

export default Prices;
