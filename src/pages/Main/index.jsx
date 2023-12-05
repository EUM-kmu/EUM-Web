import NewsCard from "../../components/NewsCard";
import { NewsCardsView } from "./styles";
import news1 from "../../assets/dummy_news_1.jpeg";
import news2 from "../../assets/dummy_news_2.png";
import news3 from "../../assets/dummy_news_3.png";
import news4 from "../../assets/dummy_news_4.png";
import PostHeader from "../../components/PostHeader";
import PostItem from "../../components/PostItem";
import location from "../../assets/location_on.svg";

const news = [
  { imgSrc: news1, title: "오월첫동네 플리마켓", location: "정릉제2동" },
  {
    imgSrc: news2,
    title: "제 15회 성북세계음식축제 누리마실",
    location: "정릉제2동",
  },
  { imgSrc: news3, title: "2023 성북 해맞이 행사", location: "정릉제2동" },
  {
    imgSrc: news4,
    title: "제 14회 성북세계음식축제 누리마실",
    location: "정릉제2동",
  },
];

// eslint-disable-next-line react/prop-types
const LocationBadge = ({ text }) => {
  return (
    <div className="flex">
      <div className="flex p-2 rounded-xl gap-[5px] bg-[#F2F2F7] items-center">
        <img src={location} />
        <p className="text-base font-regular text-[#8e8e93]">{text}</p>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex flex-col p-5 gap-3">
      <LocationBadge text={"정릉제2동"} />
      <div>
        <PostHeader title={"우리 마을 최신 소식"} />
        <div className="divide-y divide-[#E5E5EA]">
          {news.map((info, index) => {
            return (
              <PostItem key={index} imgSrc={info.imgSrc} title={info.title} />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col ">
        <PostHeader title={"이웃들이 관심있게 본 공고"} />
        <NewsCardsView>
          {news.map((info, index) => {
            return (
              <NewsCard key={index} imgSrc={info.imgSrc} title={info.title} />
            );
          })}
        </NewsCardsView>
      </div>
    </div>
  );
};

export default Main;
