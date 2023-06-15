import styled from "styled-components";

interface ContainerProps {
  justify: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: 3px solid #71d8ff;
  width: 100vw;
  padding: 0 15vw;
  height: 62px;
  background-color: #fff;
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? "" : "space-between")};
  transition: padding 0.2s ease-out;

  @media (max-width: 1000px) {
  }
`;

export const StyledComponent = styled.div`
  position: sticky;
  top: 0;
  padding: 24px 10%;
  scroll-margin-top: 24px;

  @media (prefers-reduced-motion: no-preference) {
    transition: padding 0.2s ease-out;
  }

  &:hover {
    padding: 14px 10%;
  }
`;

export const SiteLogo = styled.div`
  display: flex;
  height: 20px;
`;

export const NavContainer = styled.div`
  display: flex;
  margin-left: 59px;
  @media (max-width: 1000px) {
  }
`;

interface navProps {
  isActive: boolean;
}

export const NavButtons = styled.div<navProps>`
  cursor: pointer;
  font-size: 16px;
  margin-right: 14px;
  color: ${({ isActive }) => (isActive ? "#00AEEF" : "#000")};
  &:hover {
    color: #00aeef;
    /* color: #00aeef; */
  }
  @media (max-width: 1000px) {
    font-size: 32px;
  }
`;
export const MenuNavButtons = styled.div<navProps>`
  cursor: pointer;
  padding: 15px 20px;
  font-size: 32px;
  color: ${({ isActive }) => (isActive ? "#0D47A1" : "#fff")};
  @media (max-width: 1000px) {
  }
`;

export const MenuBar = styled.div`
  display: flex;
  font-size: 32px;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  transition: transform 0.5s ease-in-out;
  transform: translateX(0%);

  &.closed {
    transform: translateX(100%);
  }
`;

export const MenuNavContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-color: #283137;
  position: absolute;
  color: #fff;
`;

export const CloseMenu = styled.div`
  cursor: pointer;
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #ccc;
  }
`;

export const HeaderIcon = styled.img`
  width: 24px;
  margin-left: 16px;
  cursor: pointer;
`;
