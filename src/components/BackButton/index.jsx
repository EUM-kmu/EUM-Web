import { useNavigate } from "react-router-dom";
import arrow from "../../assets/left_arrow.svg";

// eslint-disable-next-line react/prop-types
const BackButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-[8px] items-center py-2"
      onClick={() => {
        navigate(-1); // 뒤로 가기
      }}
    >
      <div className="w-6 h-6 flex justify-center items-center">
        <img src={arrow} />
      </div>
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
};

export default BackButton;
