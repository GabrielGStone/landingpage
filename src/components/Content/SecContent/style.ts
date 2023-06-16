import { styled } from "styled-components";

interface WrapProps {
  column?: boolean;
}

export const Wrap = styled.div<WrapProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ column }) => (column ? "column" : "")};
  margin-bottom: 70px;
`;

const commom = `
fontsize = 38px;
letter-spacing: 0px;`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 180px;
`;
export const Text = styled.h3`
  ${commom};
  padding-right: 6px;
  color: #033244;
`;

export const Text2 = styled.h3`
  ${commom};
  color: #00aeef;
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
