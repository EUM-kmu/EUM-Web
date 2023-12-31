import BackButton from "../../components/BackButton";
import news1 from "../../assets/dummy_news_1.jpeg";
import news2 from "../../assets/dummy_news_2.png";
import news3 from "../../assets/dummy_news_3.png";
import news4 from "../../assets/dummy_news_4.png";
import PostItem from "../../components/PostItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const allNews = [
  {
    imgSrc: news1,
    title: "오월첫동네 플리마켓",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    time: 2,
    host: "성북구청",
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news2,
    title: "제 15회 성북세계음식축제 누리마실",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    time: 3,
    host: "성북구청",
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news3,
    title: "2023 성북 해맞이 행사",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    host: "성북구청",
    time: 3,
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news4,
    title: "제 14회 성북세계음식축제 누리마실",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    host: "성북구청",
    time: 5,
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news1,
    title: "오월첫동네 플리마켓",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    time: 2,
    host: "성북구청",
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news2,
    title: "제 15회 성북세계음식축제 누리마실",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    time: 3,
    host: "성북구청",
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news3,
    title: "2023 성북 해맞이 행사",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    host: "성북구청",
    time: 3,
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news4,
    title: "제 14회 성북세계음식축제 누리마실",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    host: "성북구청",
    time: 5,
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news1,
    title: "오월첫동네 플리마켓",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    time: 2,
    host: "성북구청",
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news2,
    title: "제 15회 성북세계음식축제 누리마실",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    time: 3,
    host: "성북구청",
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news3,
    title: "2023 성북 해맞이 행사",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    host: "성북구청",
    time: 3,
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
  {
    imgSrc: news4,
    title: "제 14회 성북세계음식축제 누리마실",
    start: "2023년 11월 18일(수)",
    end: "2023년 11월 20일(금)",
    host: "성북구청",
    time: 5,
    organization: "성북 행복어울림센터",
    introduction:
      "5월에 전남대 대학로에서 만난 네친구! 용이, 봉이, 상이, 흥이 네친구가 전하는 전대 대학로이야기 들어 보실래요? 오월첫동네 플리마켓 '제로웨이스트데이'를 통해 환경을 생각하고 가치 있는 소비를 실천하고 싶은 분들의 많은 관심과 참여 부탁드립니다.",
    location: "정릉제2동",
  },
];

const ListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col p-4">
      <BackButton text={"우리 마을 최신 소식"} />
      <div className="divide-y divide-[#E5E5EA]">
        {allNews.map((info, index) => {
          return (
            <PostItem
              key={index}
              imgSrc={info.imgSrc}
              title={info.title}
              location={info.location}
              time={info.time}
              onClick={() => {
                navigate("/detail", {
                  state: { ...info },
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListPage;
