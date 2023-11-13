/* eslint-disable react/prop-types */
import { Container, ImageCard, Text } from "./styles";

const NewsCard = ({ imgSrc, title }) => {
  return (
    <Container>
      <ImageCard imgSrc={imgSrc} />
      <Text>{title}</Text>
    </Container>
  );
};

export default NewsCard;
