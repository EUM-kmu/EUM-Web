import { useNavigate } from "react-router-dom";
import arrow from "../../assets/left_arrow.svg";

// eslint-disable-next-line react/prop-types
const BackButton = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-[2px]"
      onClick={() => {
        navigate(-1); // 뒤로 가기
      }}
    >
      <img src={arrow} />
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
};

export default BackButton;
