import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px #00aeef solid;
  border-radius: 8px;
  height: 40px;
  padding: 0 15px;
`;

export const Input = styled.input`
  padding: 12px;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: none;
  outline: none;
  &::placeholder {
    color: #b2eaff;
  }
`;

export const Glass = styled.img`
  width: 24px;
  filter: brightness(0) invert(1);
`;
