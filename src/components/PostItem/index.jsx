/* eslint-disable react/prop-types */
const PostItem = ({ title, imgSrc, location, time }) => {
  return (
    <div className="py-2 flex gap-[10px] cursor-pointer">
      <img src={imgSrc} className="rounded-md w-[50px] h-[50px]" />
      <div className="flex flex-col justify-between">
        <p className="font-bold text-base">{title}</p>
        <p className="font-regular text-xs">
          {location} {time}시간 전
        </p>
      </div>
    </div>
  );
};

export default PostItem;
