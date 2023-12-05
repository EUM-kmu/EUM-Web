/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import BackButton from "../../components/BackButton";

const PostDetail = () => {
  const post = useLocation().state;

  return (
    <>
      <div className="flex flex-col p-4 ">
        <BackButton text={"소식 상세"} />

        <p className="text-xl font-bold pt-4">{post.title}</p>
        <div className="divide-y divide-[#E5E5EA]">
          <div className="flex flex-col py-2 gap-[6px]">
            <p className="text-base font-bold">행사 기간</p>
            <div className="flex gap-2">
              <p>
                {post.start} - {post.end}
              </p>
              <div className="rounded-[4px] px-[5px] bg-[#F2F2F7] text-[#8E8E93]">
                D-14
              </div>
            </div>
          </div>
          <div className="flex flex-col py-2">
            <p className="text-base font-bold">기관</p>
            <p>주최 {post.host}</p>
            <p>주관 {post.organization}</p>
          </div>
          <div className="flex flex-col py-2">
            <p className="text-base font-bold">소개</p>
            <p>{post.introduction}</p>
          </div>
          <div className="pb-2"></div>
        </div>
      </div>
      <div className="h-[5px] bg-[#d9dee4]"></div>
      <div className="py-4 px-6">
        <img src={post.imgSrc} />
      </div>
    </>
  );
};

export default PostDetail;
