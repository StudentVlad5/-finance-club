import 'modern-normalize';
import { theme } from 'components/baseStyles/Variables.styled';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat','Inter','DM Sans', sans-serif;

  background-color:${props => props.theme.fon};
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  transition: .3s ease;
  
  &.scroll {
      max-height: 100vh;
      overflow: hidden;
    }
 }

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

 //-----reset-----
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

//-----modal windows-----//
#popup-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 45;

    width: 100vw;
    height: 100vh;

    opacity: 1;
    visibility: visible;

    background-color: #0000006b;
    transition: opacity .3s linear 50ms, visibility .3s linear 50ms; 
}

#popup-root.is-hide {
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  width: 0;
  height: 0;
}

 //-----pagination-----//
.pagination-data {
        padding: 0;
        margin: 0;
    }

    .pagination-data li {
        list-style: none;
    }

    .rc-pagination {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .rc-pagination-item,
    .rc-pagination-prev,
    .rc-pagination-jump-prev,
    .rc-pagination-jump-next {
        margin-right: 8px;
    }

    .rc-pagination-total-text {
        margin-right: 12px;
        cursor: initial;
    }

    .rc-pagination-jump-next,
    .rc-pagination-jump-prev,
    .rc-pagination-next,
    .rc-pagination-prev {
        display: inline-block;
        min-width: 28px;
        height: 28px;
        color: rgba(0, 0, 0, .85);
        font-family: Arial;
        line-height: 28px;
        text-align: center;
        vertical-align: middle;
        list-style: none;
        border-radius: 2px;
        cursor: pointer;
        transition: all .3s;
    }

    .rc-pagination-jump-next button,
    .rc-pagination-jump-prev button {
        color:${props => props.theme.grey};
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .rc-pagination-jump-next button:after,
    .rc-pagination-jump-prev button:after {
        display: block;
        content: "•••";
    }

    .rc-pagination-item,
    .rc-pagination-prev,
    .rc-pagination-next,
    .rc-pagination-total-text {
        min-width: initial;
        height: auto;  
        font-size: 10px;
        line-height: initial;
        color:${props => props.theme.white_text}!important;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .rc-pagination-item a,
    .rc-pagination-item button,
    .rc-pagination-prev a,
    .rc-pagination-prev button,
    .rc-pagination-next a,
    .rc-pagination-next button,
    .rc-pagination-total-text a,
    .rc-pagination-total-text button {
        padding: 6px 8px;
        height: auto;
        min-width: 24px;
        min-height: 24px;
        border-radius: 8px;
        border: 1px solid transparent;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 400;
        color:${props => props.theme.white_text}!important;
        transition: 0.3s;
        -webkit-transition: 0.3s;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
    }

    .rc-pagination-item.rc-pagination-item-active a,
    .rc-pagination-item.rc-pagination-item-active a:hover,
    .rc-pagination-prev.rc-pagination-item-active a,
    .rc-pagination-prev.rc-pagination-item-active a:hover,
    .rc-pagination-next.rc-pagination-item-active a,
    .rc-pagination-next.rc-pagination-item-active a:hover,
    .rc-pagination-total-text.rc-pagination-item-active a,
    .rc-pagination-total-text.rc-pagination-item-active a:hover {
        background-color: ${props => props.theme.white_fon};
        border-color:${props => props.theme.white_fon};
        color: ${props => props.theme.black_text} !important;
    }

    .rc-pagination-item a:hover,
    .rc-pagination-item button:hover,
    .rc-pagination-prev a:hover,
    .rc-pagination-prev button:hover,
    .rc-pagination-next a:hover,
    .rc-pagination-next button:hover,
    .rc-pagination-total-text a:hover,
    .rc-pagination-total-text button:hover {
        background-color: ${props => props.theme.grey};
        border-color: ${props => props.theme.grey};
        color: ${props => props.theme.white_text} !important;
    }


//-----Swiper-----//

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height:auto !important;
  text-align: center;
  font-size: 18px;
  background: ${props => props.theme.fon};

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  /* width: 100%;
  height: 100%; */
  max-height: 500px;
  object-fit: cover;
}

.swiper-button-next::after {
color:${props => props.theme.grey} !important;
}

.swiper-button-prev::after {
color:${props => props.theme.grey} !important;
}

.buttonSlide{
  color:${props => props.theme.white_text};
  width: 31px;
  height: 50px;
  flex-shrink: 0;
};


.swiper-pagination-bullet-active.swiper-pagination-bullet{

}
.swiper-pagination-bullet {

}
.swiper-button-prev,
.swiper-button-next,
.swiper-pagination-bullet {
  top: var(--swiper-navigation-sides-offset,10px) !important;
  bottom:var(--swiper-navigation-sides-offset,10px) !important;
  /* transform: scale(1.1); */
}

input[type="date"]::-webkit-calendar-picker-indicator {

  opacity: 1;
}

input::-webkit-calendar-picker-indicator:hover {
  opacity: 0.6;
  transform: scale(1.2);
  cursor: pointer;
}

//-----Range-----//
.rc-slider {
    background-color: ${props => props.theme.fon} !important;
    border-radius:0 !important;
}

.rc-slider-track {
    background-color: ${props => props.theme.grey} !important;
}

.rc-slider-handle{
  background-color: ${props => props.theme.fon} !important;
  border: solid 2px ${props => props.theme.grey} !important;

  &:focus-visible{
    box-shadow: 0 0 0 3px ${props => props.theme.grey} !important;
  }

  &-dragging{
    box-shadow: 0 0 0 5px ${props => props.theme.grey} !important;
  }
}

.rc-slider-disabled{
  background-color:${props => props.theme.fon} !important;}


//-----Header-----//
.addHeaderBottom{
  background-color: ${props => props.theme.black};
}

//-----Select container-----//
.select__value-container {
  width: 280px;
  font-size: ${theme.fontSizes.extrasmall};
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  border: none;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${props => props.theme.grey};
    color: ${props => props.theme.grey};
    outline: none;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 448px;
    font-size: ${theme.fontSizes.medium};
    padding: 14px 0 13px 32px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 558px;
  }
  &::placeholder {
    text-transform: uppercase;
  }
  &:focus ~ .floating-label,
  &:not([value=""]):not(:focus):invalid ~ .floating-label,
  &:not([value=""]):not(:focus):valid ~ .floating-label {
    top: -15px;
    left: 20px;
    font-size: 11px;
    opacity: 1;
}
}
.select__indicators{
  background: ${props => props.theme.black};
  color: ${props => props.theme.white_text};
  border: none;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${props => props.theme.grey};
    color: ${props => props.theme.grey};
    outline: none;
  }
}
.select__indicator{
  &>svg{
    width:15px;
    height:15px;
  }
}
.active_label > span::before {
  border-color: ${props => props.theme.grey};
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='64' height='64' viewBox='0 0 64 64'%0Astyle='fill:%235a6b47;'%3E%3Cpath d='M27 55L6 33 9 29 26 41 55 12 59 16z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: contain;
}
.select__value-container{
  background-color: ${props => props.theme.white_fon};
  color: ${props => props.theme.grey};
}
.select__control{
  min-height: auto !important;
}
.select__control>.select__placeholder{
  color: ${props => props.theme.grey};
  font-size: ${theme.fontSizes.extrasmall};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small};
  }

}
.select__control>.select__value-container {
  color: ${props => props.theme.grey};
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.extrasmall};
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small};
  }
}
.iNcVkr {
  gap:4px;
}
.osMwo {
  width: 100%;
  border:none !important;
  border-radius: 3px !important;
  overflow:hidden !important;
}
.WEoZy{
  border-radius:0 !important;
}
.css-13cymwt-control {
  border:none !important;
}
.css-1xc3v61-indicatorContainer{
  padding: 0!important;
}
.css-t3ipsp-control {
  min-height: auto !important;
  border-color: ${props => props.theme.black} !important;
  &:hover, &:focus{
  border-color: ${props => props.theme.grey} !important;
  }
}
.css-16xfy0z-control{
  background-color: ${props => props.theme.white_fon} !important;
}
.css-15lsz6c-indicatorContainer{
  padding:0 !important;
}
.css-1nmdiq5-menu{
  font-size: ${theme.fontSizes.extrasmall} !important;
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small} !important;
  }
}

//-----Link Folder-----//
.isDisabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
  text-decoration: none;
}

.linkFolder.active{
  background-color: ${props => props.theme.grey};
  color: ${props => props.theme.white_text}
}

.linkFolder.sideBar_menu{
   position: relative;
  padding-left: 10px;
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.grey};

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.grey};
  }

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 0;
    width: 110%;
    height: 0.5px;
    background: ${props => props.theme.white_fon};

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 150px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: 285px;
    }
  }

  &.active {
    margin-left: 5px;
    font-weight: 500;
    color: ${props => props.theme.grey};
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
    background-color: transparent;

    &::before {
      @media (min-width: ${theme.breakpoints.desktop}) {
        width: 250px;
      }
    }
  }
}

//-----Scrollbar-----//
::-webkit-scrollbar {
    width: 6px;
    border: 0.5px solid white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.grey};
    background-clip: padding-box;
    border: 0.05em solid #eeeeee;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.grey};
  }
    ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.fon};
  }
  #style-1::-webkit-scrollbar-track
  {
    -webkit-box-shadow: ${props => props.theme.fon};
    background-color: ${props => props.theme.fon};
  }
    #style-1::-webkit-scrollbar
  {
    width: 8px;
    background-color:${props => props.theme.grey};
  }
    #style-1::-webkit-scrollbar-thumb
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: ${props => props.theme.grey};
  }
  #style-1::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.grey};
  }
`;
