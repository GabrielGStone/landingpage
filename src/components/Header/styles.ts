import styled from "styled-components";

interface ContainerProps {
  padding: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  padding: ${({ padding }) => padding};
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.2s ease-out;

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  @media (max-width: 1000px) {
    padding: ${({ padding }) => (Number(padding) > 40 ? "5px" : "10px")};
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
  font-size: 20px;
  font-weight: 600;
  display: flex;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1000px) {
  }
`;

interface navProps {
  isActive: boolean;
}

export const NavButtons = styled.div<navProps>`
  cursor: pointer;
  padding: 15px 20px;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? "#0D47A1" : "#000")};
  @media (max-width: 1000px) {
    font-size: 32px;
  }
`;
export const MenuNavButtons = styled.div<navProps>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 32px;
  color: ${({ isActive }) => (isActive ? "#0D47A1" : "#000")};
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
  width: 175px;
  height: 100vh;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  right: 0;
  background-color: #fff;
`;

export const CloseMenu = styled.div`
  cursor: pointer;
  display: flex;
  width: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #dedede;
  :hover {
    background-color: #ccc;
  }
`;
