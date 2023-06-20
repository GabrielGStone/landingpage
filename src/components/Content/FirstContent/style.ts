import { styled } from "styled-components";
import Swiper from "swiper";

export const Container = styled.div`
  display: flex;
  margin-top: 70px;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Arc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 48px 55px 0 40px;
  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const UpperArc = styled.div`
  width: 8px;
  height: 100px;
  border-left: 1.32px solid #00aeef;
  border-bottom-left-radius: 10px;
  @media (max-width: 1000px) {
    border: none;
    border-radius: 0;
    border-top: 1.32px solid #00aeef;
    width: 100px;
    height: 8px;

    border-top-right-radius: 20px;
  }
`;
export const BottomArc = styled.div`
  width: 8px;
  height: 100px;
  border-left: 1.32px solid #00aeef;
  border-top-left-radius: 10px;
  @media (max-width: 1000px) {
    border-radius: 0;
    border: none;
    border-top: 1.32px solid #00aeef;
    border-top-left-radius: 20px;
    height: 8px;
    width: 100px;
  }
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

export const NextButton = styled(CustomButton)`
  @media (max-width: 1000px) {
    width: 150px;
  }
`;

export const PrevButton = styled(CustomButton)`
  @media (max-width: 1000px) {
    width: 150px;
  }
  margin-right: 20px;
  transform: rotate(180deg);
`;

export const Arrow = styled.img`
  height: 11px;
`;

export const CarouselSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17px 20px 41px;
  height: 100%;
  box-shadow: inset rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CarouselContainer = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    margin-top: 24px;
    align-items: center;
    width: 80vw;
  }
`;

export const SlideImage = styled.img`
  width: 170px;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #101912;
  font-weight: 600;
  margin: 16px 0 11px;
`;

export const Text = styled.p`
  font-size: 15px;
  color: #101912;
  font-weight: 300;
  text-align: center;
  width: 200px;
`;

export const TextBox = styled.div``;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const Wrap = styled.div`
  display: flex;
  width: 45%;
  flex-direction: flex;
  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
