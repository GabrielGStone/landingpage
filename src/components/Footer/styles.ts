import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
  padding: 40px 15vw 0;
  color: #fff;
  background-color: #283137;
  font-size: 24px;
  font-weight: 600;
  border-top: 5px solid #0089bc;
  @media (max-width: 1000px) {
    padding: 29px 37px;
  }
`;

export const SiteLogo = styled.div`
  width: 88px;
  display: flex;
`;

export const Logos = styled.i`
  color: #8bd4f8;
`;

export const Title = styled.h4`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
`;

interface LinkProps {
  text5?: boolean;
}

export const Link = styled.p<LinkProps>`
  cursor: ${({ text5 }) => (text5 ? "auto" : "pointer")};
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ text5 }) => (text5 ? "#B2EAFF" : "#00aeef")};
  max-width: ${({ text5 }) => (text5 ? "160px" : "")};
`;
interface BoxProps {
  row?: boolean;
  width?: string;
  reverse?: boolean;
}

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  margin-left: ${({ row }) => (row ? "" : "60px")};
  align-items: flex-start;
  width: ${({ width }) => (width ? "100%" : "")};
  @media (max-width: 1000px) {
    margin: 0;
    margin-top: ${({ reverse }) => (reverse ? "20px" : "")};
    padding: 0;
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  }
`;

export const IconBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  margin-left: ${({ row }) => (row ? "" : "60px")};
  align-items: flex-start;
  width: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 18px;
    margin: 0;
    width: 100%;
    flex-wrap: nowrap;
    background-color: #000;
    justify-content: center;
  }
`;
export const Icon = styled.img`
  cursor: pointer;
  margin: 15px 30px 0 0;
  width: 30px;
  &:hover {
    filter: contrast(300%);
  }
`;

interface WrapProps {
  width?: string;
}

export const Wrap = styled.div<WrapProps>`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;

  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  margin-bottom: 40px;
  @media (max-width: 1000px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;
