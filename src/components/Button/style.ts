import { styled } from "styled-components";

interface ButtonProps {
  white?: boolean;
}

export const CustomButton = styled.button<ButtonProps>`
  display: flex;
  max-width: 200px;
  white-space: nowrap;
  justify-content: center;
  padding: 8px 36px;
  border: none;
  margin-top: 40px;
  font-weight: 600;
  color: ${({ white }) => (white ? "#fff" : "#033244")};
  background-color: ${({ white }) => (white ? "#0089BC" : "#71d8ff")};
`;
