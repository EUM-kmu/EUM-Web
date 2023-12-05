import { styled } from "styled-components";

export const NewsCardsView = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 12px;
  grid-template-columns: calc(50% - 6px) calc(50% - 6px);
`;
