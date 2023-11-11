import { BtnContainer, BtnHeroJoin, DesctopImgContainer, HeroContainer, HeroControl, HeroHeadline, HeroImages, HeroSection, DesctopDarkScreen, DesctopDarkBottom } from "./Hero.styled";


const Hero = () => {
  // const { t } = useTranslation();
  

  return (
    <HeroSection>
      <HeroContainer>
        <HeroControl>
          <HeroHeadline data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">COMPANY NAME - dolor, consectetur adipisicing elit</HeroHeadline>
          <BtnContainer>
            <BtnHeroJoin aria-label="join now" type="button">JOIN NOW</BtnHeroJoin>
            <BtnHeroJoin aria-label="VIEW PRICING" type="button">VIEW PRICING</BtnHeroJoin>
          </BtnContainer>
        </HeroControl>
        <DesctopImgContainer>
          <DesctopDarkScreen/>
          <HeroImages/>
          <DesctopDarkBottom/>
        </DesctopImgContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
