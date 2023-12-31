import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ImageCard = styled.img.attrs((props) => ({
  src: props.imgSrc || "",
}))`
  border-radius: 12px;
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || 400};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
