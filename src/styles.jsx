import { styled } from "styled-components";

export const Container = styled.div`
  width: auto;
  min-width: 280px;
  max-width: 448px;
  position: relative;
  word-break: keep-all;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100vh;
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }
`;
