import arrow from "../../assets/right_arrow.svg";

// eslint-disable-next-line react/prop-types
const PostHeader = ({ title }) => {
  return (
    <div className="flex justify-between py-4">
      <p className="font-bold text-xl">{title}</p>
      <div className="flex cursor-pointer items-center">
        <p className="font-medium text-[#8E8E93]">더보기</p>
        <img src={arrow} />
      </div>
    </div>
  );
};

export default PostHeader;
