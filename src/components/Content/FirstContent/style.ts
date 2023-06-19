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

export const CustomSwiper = new Swiper("", {});

const CustomButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ccc;
  border-radius: 50%;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #999;
  }
`;

export const NextButton = styled(CustomButton)``;

export const PrevButton = styled(CustomButton)`
  transform: rotate(180deg);
`;

export const Arrow = styled.img`
  height: 11px;
`;

export const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px #ccc solid;
  box-shadow: unset 2px 2px 2px 2px #ccc;
`;

export const CarouselContainer = styled.div``;

export const SlideImage = styled.img``;
