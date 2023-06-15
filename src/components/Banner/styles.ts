import styled from "styled-components";
import { images } from "./constants";

export const Container = styled.div`
  display: flex;
  border-bottom: 5px solid #71d8ff;
  @media (max-width: 1000px) {
    background-image: url(${images.responsive_banner});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 65vh;
  }
`;
export const BannerImage = styled.img`
  width: 100vw;
  @media (max-width: 1000px) {
    width: 0;
  }
`;
