import { styled } from "styled-components";
import bg_phone from "../../assets/bg_phone.png";
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

export const Wrap = styled.div<WrapProps>`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  align-items: ${({ center }) => (center ? "center" : "")};
  flex-direction: ${({ column }) => (column ? "column" : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  background-image: url(${({ background }) => (background ? background : "")});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  padding: ${({ padding }) => (padding ? padding : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "40px")};
  @media (max-width: 1000px) {
    background-position-x: 100%;
    background-position-y: 100%;
    background-image: url(${({ background }) => (background ? bg_phone : "")});

    padding: 32px;
    align-items: center;
    flex-direction: column;
  }
`;

interface TextProps {
  size?: string;
  weight?: string;
  color?: string;
  mb?: string;
}

const commom = `
font-weight:600;
font-size : 23px;
letter-spacing: 0px;`;

interface ContainerProps {
  width?: string;
}
export const TextContainer = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ width }) => (width ? width : "180px")};
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
export const Text = styled.h3<TextProps>`
  ${commom};
  padding-right: 6px;
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  color: ${({ color }) => (color ? color : "#033244")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  @media (max-width: 1000px) {
    font-size: 17px;
    text-align: center;
  }
`;

export const Text2 = styled.h3<TextProps>`
  ${commom};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  color: ${({ color }) => (color ? color : "#00AEEF")};
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Text3 = styled.p<TextProps>`
  ${commom};
  margin-top: 24px;
  font-size: ${({ size }) => (size ? size : "18px")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  color: ${({ color }) => (color ? color : "#033244")};
  @media (max-width: 1000px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const Text4 = styled.h4<TextProps>`
  font-size: ${({ size }) => (size ? size : "20px")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  color: ${({ color }) => (color ? color : "#0089BC")};
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Text5 = styled.p<TextProps>`
  color: #e2f7ff;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const LateralScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  max-width: 100%;
  height: 180px;
  padding: 20px;
  margin-top: 40px;
  background-color: #f3f3f3;
  border-bottom: none;
`;

export const Products = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-width: 122px;
  gap: 13px;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 132px;
  margin-right: 20px;
  background-color: #e7e7e7;
`;
