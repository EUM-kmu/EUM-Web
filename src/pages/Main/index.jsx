import NewsCard from "../../components/NewsCard";
import { Container, Icon, NewCardsView, NewsButton, Text } from "./styles";

import news1 from "../../assets/dummy_news_1.jpeg";
import news2 from "../../assets/dummy_news_2.png";
import news3 from "../../assets/dummy_news_3.png";
import news4 from "../../assets/dummy_news_4.png";
import icon from "../../assets/dummy_icon.png";

const news = [
  { imgSrc: news1, title: "오월첫동네 플리마켓" },
  { imgSrc: news2, title: "제 15회 성북세계음식축제 누리마실" },
  { imgSrc: news3, title: "2023 성북 해맞이 행사" },
  { imgSrc: news4, title: "제 14회 성북세계음식축제 누리마실" },
];

const Main = () => {
  return (
    <Container>
      <NewsButton>
        <Icon imgSrc={icon} />
        <Text fontSize={"18px"} fontWeight={500}>
          우리 마을 모든 행사 확인하기
        </Text>
      </NewsButton>
      <Text fontSize={"24px"} fontWeight={700}>
        이웃들이 관심있게 본 공고
      </Text>
      <NewCardsView>
        {news.map((info, index) => {
          return (
            <NewsCard key={index} imgSrc={info.imgSrc} title={info.title} />
          );
        })}
      </NewCardsView>
    </Container>
  );
};

export default Main;
