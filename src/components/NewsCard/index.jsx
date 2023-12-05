/* eslint-disable react/prop-types */
import { Container, ImageCard, Text } from "./styles";

const NewsCard = ({ imgSrc, title, onClick }) => {
  return (
    <Container className="cursor-pointer" onClick={onClick}>
      <ImageCard imgSrc={imgSrc} />
      <Text fontSize={"16px"}>{title}</Text>
    </Container>
  );
};

export default NewsCard;
