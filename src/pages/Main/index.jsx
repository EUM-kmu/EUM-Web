import NewsButton from "../../components/NewsButton";
import centerIcon from "../../images/center_icon.png";
import noticeIcon from "../../images/notice_icon.png";
import newsIcon from "../../images/news_icon.png";


const MainPage = () => {
    const btnType = [
        {text: "동네 소식", imageUrl: newsIcon},
        {text: "자치회관", imageUrl: centerIcon},
        {text: "공고", imageUrl: noticeIcon},
    ]

    return (
        <><p>MainPage</p></>
    )
}

export default MainPage;