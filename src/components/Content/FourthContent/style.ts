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
  @media (max-width: 1000px) {
    width: 90vw;
    justify-content: space-around;
  }
`;

export const RightImages = styled.img`
  width: 160px;

  @media (max-width: 1000px) {
    margin-top: 24px;
    margin-bottom: 8px;
    width: 80px;
    border: 1px solid #f3f3f3;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 5px #ccc;
  }
`;

export const ArcContainer = styled.div<arcProps>`
  padding-top: 100px;
  border-top: 2px solid #00aeef;
  flex: 1;
  border-top-left-radius: ${({ right }) => (right ? "30%" : "")};
  border-top-right-radius: ${({ right }) => (!right ? "30%" : "")};
`;

export const RightArcContainer = styled.div<arcProps>`
  padding-top: 100px;
  border-top: 2px solid #00aeef;
  flex: 1;
  border-top-left-radius: 30%;
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

export const Wrap3 = styled.div<WrapProps>`
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
    background-color: #f3f3f3;
    padding: 32px;
    flex-direction: column;
    align-items: center;
  }
`;
