import styled, { css } from "styled-components";

interface ContainerProps {
  justify: boolean;
  menuOpen?: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-family: "ArcherPro";
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
    height: ${({ menuOpen }) => (menuOpen ? "100vh" : "")};
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
`;

export const NavContainer = styled.div`
  display: flex;
  margin-left: 59px;

  @media (max-width: 1000px) {
  }
`;

interface navProps {
  isActive?: boolean;
  menuOpen?: boolean;
}

export const NavButtons = styled.div<navProps>`
  cursor: pointer;
  font-size: 15px;
  font-weight: 300;
  margin-right: 14px;
  color: ${({ isActive }) => (isActive ? "#71D8FF" : "#000")};
  &:hover {
    color: #00aeef;
    /* color: #00aeef; */
  }
  @media (max-width: 1000px) {
  }
`;
export const MenuNavButtons = styled.div<navProps>`
  display: flex;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 14px;
  @media (max-width: 1000px) {
  }
`;

interface menuProps {
  menuOpen?: boolean;
}
export const MenuBar = styled.div<menuProps>`
  border-top: 3px solid #0089bc;
  display: flex;
  justify-self: flex-end;
  width: 100vw;
  background-color: #283137;
  position: absolute;
  transition: 0.2s;

  ${({ menuOpen }) =>
    menuOpen
      ? css`
          width: 100vw;
          height: 99.7vh;
          top: 0;
          left: 0;
          padding: 10px 37px;
        `
      : css`
          right: 1;
          width: 0;
          height: 0;
          padding: 0;
        `};
`;

export const MenuNavContainer = styled.div`
  display: flex;
  width: 82%;
  flex-direction: column;
  background-color: #283137;
  position: absolute;
  overflow-y: hidden;
  padding-bottom: 25px;
  color: #fff;
  border-bottom: 2px solid #e1e1e1;
`;

export const CloseMenu = styled.div`
  cursor: pointer;
  right: 0;
  position: absolute;
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
interface ArrowProps {
  menuIsOpen?: boolean;
}
export const Arrow = styled.img<ArrowProps>`
  display: flex;
  width: 15px;
  height: 15px;
  margin-left: 8px;
  filter: invert(1) sepia(100%) brightness(80%) saturate(400%)
    hue-rotate(150deg);
  transform: ${({ menuIsOpen }) => (menuIsOpen ? "rotate(180deg)" : "")};
  transition: transform 0.2s;
`;
interface BoxProps {
  siteIsOpen?: boolean;
}
export const Box = styled.div<BoxProps>`
  display: flex;
  width: 80vw;
  flex-direction: column;
  background-color: #000;
  border-radius: 10px;
  font-family: "Sora";
  font-size: 12px;
  font-weight: 800;
  ${({ siteIsOpen }) =>
    siteIsOpen
      ? css`
          padding: 32px 28px 5px;
          margin-bottom: 24px;
        `
      : css`
          width: 0;
          height: 0;
          padding: 0;
        `};
`;

export const SiteText = styled.p`
  cursor: pointer;
  color: #f8fcfe;
  margin-bottom: 27px;
  ::hover {
    color: red;
  }
`;
