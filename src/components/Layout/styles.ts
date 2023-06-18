import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  @media (max-width: 1000px) {
    /* min-height: 100vh;
    height: auto; */
  }
`;

export const Content = styled.div`
  padding: 0 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    /* width: 100%; */
    padding: 0 37px;
  }
`;
