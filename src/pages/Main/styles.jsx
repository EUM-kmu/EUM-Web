import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  gap: 12px;
`;

export const NewsButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 16px 24px;
  border-radius: 12px;
  background-color: #f2f2f7;
`;

export const Icon = styled.img.attrs((props) => ({
  src: props.imgSrc || "",
}))`
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background-color: white;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || 400};
`;

export const NewCardsView = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 12px;
  grid-template-columns: calc(50% - 6px) calc(50% - 6px);
`;
