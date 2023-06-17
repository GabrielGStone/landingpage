import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 4px solid #00aeef;
  margin-left: 15vw;
  padding: 32px 160px;
  width: 70vw;
  position: absolute;
  background-color: #fff;
  @media (max-width: 1000px) {
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 99px;
`;
export const Title = styled.p`
  cursor: pointer;
  padding-bottom: 12px;
  border-bottom: 1px solid #c4c4c9;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 800;
  color: #005271;
`;

interface textProps {
  active?: boolean;
}

export const Text = styled.p<textProps>`
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "")};
  font-size: 14px;
  color: ${({ active }) => (active ? "#033244" : "#39393B")};
  padding-bottom: 8px;
  &:hover {
    filter: brightness(200%);
  }
`;
