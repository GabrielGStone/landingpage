import { styled } from "styled-components";

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
  @media (max-width: 1000px) {
    background-color: #fff;
  }
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
