import { styled } from "styled-components";

interface ButtonProps {
  white?: boolean;
  noMargin?: boolean;
  mb?: string;
  mt?: string;
  padding?: string;
}

export const CustomButton = styled.button<ButtonProps>`
  display: flex;
  max-width: 200px;
  white-space: nowrap;
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : "8px 36px")};
  border: none;
  margin-top: ${({ mt }) => (mt ? mt : "40px")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  font-weight: 600;
  color: ${({ white }) => (white ? "#fff" : "#033244")};
  background-color: ${({ white }) => (white ? "#0089BC" : "#71d8ff")};
  @media (max-width: 1000px) {
    margin-bottom: ${({ noMargin, mb }) => (noMargin ? 0 : mb ? mb : 0)};
  }
`;
