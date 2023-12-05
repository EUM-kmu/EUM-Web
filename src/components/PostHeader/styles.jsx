import { styled } from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || "black"};
`;

export const ShowAllButton = styled.div`
  cursor: pointer;
  display: flex;
`;
