import { styled } from "styled-components";

interface BoxProps {
  background: string;
}

interface WrapProps {
  column?: boolean;
  background?: string;
  padding?: string;
  center?: boolean;
  mb?: string;
  justify?: string;
  width?: string;
  bg?: boolean;
}

export const Wrap2 = styled.div<WrapProps>`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  align-items: ${({ center }) => (center ? "center" : "")};
  flex-direction: ${({ column }) => (column ? "column" : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  background-image: url(${({ background }) => (background ? background : "")});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  padding: ${({ padding }) => (padding ? padding : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "40px")};
  @media (max-width: 1000px) {
    width: 100vw;
    margin-left: -10vw;
    background-position-x: 100%;
    background-position-y: 100%;
    background-size: 350%;
    padding: 40px 58px;
    align-items: center;
    flex-direction: column;
  }
`;

export const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: flex-end;
  height: 400px;
  flex-direction: column;
  background-image: url(${({ background }) => (background ? background : "")});
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    background-position-y: -15%;
    min-width: 100%;
  }
`;

export const Section = styled.div`
  background-color: #283137;
  padding: 24px 36px;
  @media (max-width: 1000px) {
    padding: 32px 20px;
    display: flex;
    flex-direction: column;
    width: 100vw;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 16px;
`;

export const Link = styled.p`
  cursor: pointer;
  text-decoration: NONE;
  color: #00aeef;
  margin-top: 40px;
  font-weight: 900;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1000px) {
    margin-top: 0;
    font-size: 12px;
  }
`;
export const Cards = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 24px;
  justify-content: space-between;
  min-width: 70vw;
  @media (max-width: 1000px) {
    max-width: 300px;
    overflow-x: scroll;
  }
`;

export const BlankSpace = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    height: 16px;
  }
`;
