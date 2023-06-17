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
    filter: invert(0) sepia(1) saturate(1000%) hue-rotate(145deg);
    /* color: #00aeef; */
  }
`;

export const Arrow = styled.img`
  display: flex;
  width: 20px;
  height: 18px;
  margin-left: 8px;
  filter: brightness(0) invert(1);
`;
