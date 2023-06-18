import styled, { css } from "styled-components";

interface ContainerProps {
  menuIsOpen?: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  position: absolute;
  transition: linear 0.2s;

  ${({ menuIsOpen }) =>
    menuIsOpen
      ? css`
          padding: 32px 223px 55px 161px;
          background-color: #fff;
          overflow: hidden;
          justify-content: space-between;
          border-top: 4px solid #00aeef;
          margin-left: 15vw;
          width: 70vw;
        `
      : css`
          border: none;
          max-height: 0;
          opacity: 0;
          padding: 0;
          margin: 0;
        `};
  @media (max-width: 1000px) {
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 99px;
`;
export const Title = styled.p`
  cursor: pointer;
  padding-bottom: 12px;
  border-bottom: 1px solid #c4c4c9;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 800;
  color: #005271;
`;

interface textProps {
  active?: boolean;
}

export const Text = styled.p<textProps>`
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "")};
  font-size: 14px;
  color: ${({ active }) => (active ? "#033244" : "#39393B")};
  padding-bottom: 8px;
  &:hover {
    filter: brightness(200%);
  }
`;
