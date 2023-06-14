import styled from "styled-components";
import { images } from "./constants";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 7800px;
  width: 100vw;
  margin: 0 -15vw;
  background-image: url(${images.banner});
  background-repeat: no-repeat;
  background-position: top;

  @media (max-width: 1000px) {
  }
`;
