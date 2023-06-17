import { styled } from "styled-components";

interface BoxProps {
  background: string;
}

export const Box = styled.div<BoxProps>`
  width: 424px;
  display: flex;
  justify-content: flex-end;
  height: 400px;
  flex-direction: column;
  background-image: url(${({ background }) => (background ? background : "")});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Section = styled.div`
  background-color: #283137;
  padding: 24px 36px;
`;

export const Title = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 16px;
`;

export const Link = styled.p`
  cursor: pointer;
  text-decoration: NONE;
  color: #00aeef;
  margin-top: 40px;
  font-weight: 900;
  &::hover {
    opacity: 0.7;
  }
`;
export const Cards = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: space-between;
`;
