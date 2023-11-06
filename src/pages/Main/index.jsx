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
            btnType.map((btn) => {
                return <NewsButton text={btn.text} iconSrc={btn.imageUrl}></NewsButton>
            }
        )
    )
}

export default MainPage;