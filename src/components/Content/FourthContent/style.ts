import { styled } from "styled-components";
interface arcProps {
  right?: boolean;
}

export const ArcView = styled.div`
  flex: 1;
`;

export const Box = styled.div<arcProps>`
  display: flex;
  padding: 0 2vh 0 5vw;
`;

export const RightImages = styled.img`
  width: 160px;
`;

export const Arc = styled.div<arcProps>`
  padding-top: 100px;
  border-top: 1px solid #00aeef;
  flex: 1;
  border-top-left-radius: ${({ right }) => (right ? "40%" : "")};
  border-top-right-radius: ${({ right }) => (right ? "" : "40%")};
`;

export const Caps = styled.strong`
  margin: 0 4px;
`;

export const Input = styled.input`
  margin-top: 15px;
  border: 1px solid #0089bc;
  background: #f3f3f3 0% 0% no-repeat padding-box;
  color: #005271;
  &::placeholder {
    color: #0089bc;
  }
  padding: 12px 24px;
  font-size: 16px;
  outline: none;
`;
