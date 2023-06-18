import { images } from "./constants";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 15vw;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: #033244;
  @media (max-width: 1000px) {
    height: 0;
  }
`;

export const NavButtons = styled.div`
  cursor: pointer;
  margin-right: 32px;
  display: flex;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  font-family: "archerPro";
  text-transform: uppercase;
  &:hover {
    filter: sepia(2) brightness(100%) saturate(1000%) hue-rotate(145deg);
    /* color: #00aeef; */
  }
`;

interface ArrowProps {
  menuIsOpen?: boolean;
}

export const Arrow = styled.img<ArrowProps>`
  display: flex;
  width: 15px;
  height: 15px;
  margin-left: 8px;
  filter: brightness(0) invert(1);
  transform: ${({ menuIsOpen }) => (menuIsOpen ? "rotate(180deg)" : "")};
  transition: transform 0.2s;
`;

export const Banner = styled.div`
  display: flex;
  position: relative;
  border-bottom: 5px solid #71d8ff;
  @media (max-width: 1000px) {
    border-bottom: none;

    background-image: url(${images.responsive_banner});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 80vh;
  }
`;
export const BannerImage = styled.img`
  width: 100vw;
  @media (max-width: 1000px) {
    width: 0;
  }
`;
