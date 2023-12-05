/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton";

const PostDetail = () => {
  const post = useLocation().state;

  return (
    <div className="flex flex-col p-4">
      <BackButton text={"소식 상세"} />

      <p>{post.title}</p>
      <div className="flex flex-col">
        <p>행사 기간</p>
        <div>
          <p>
            {post.start} - {post.end}
          </p>
          <div>D-14</div>
        </div>
      </div>

      <div className="flex flex-col">
        <p>기관</p>
        <p>주최 {post.host}</p>
        <p>주관 {post.organization}</p>
      </div>

      <div className="flex flex-col">
        <p>소개</p>
        <p>{post.introduction}</p>
      </div>

      <img src={post.imgSrc} />
    </div>
  );
};

export default PostDetail;
