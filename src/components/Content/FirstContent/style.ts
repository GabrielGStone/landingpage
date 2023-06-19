import { styled } from "styled-components";
import Swiper from "swiper";

export const Container = styled.div`
  display: flex;
  margin-top: 70px;
`;

export const Arc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 55px 0 40px;
`;

export const UpperArc = styled.div`
  width: 8px;
  height: 100px;
  border-left: 1.32px solid #00aeef;
  border-bottom-left-radius: 10px;
`;
export const BottomArc = styled.div`
  width: 8px;
  height: 100px;
  border-left: 1.32px solid #00aeef;
  border-top-left-radius: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CustomSwiper = new Swiper("", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    2000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
