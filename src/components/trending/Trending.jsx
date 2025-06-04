import { useNavigate } from "react-router-dom";
import { IMG_BAS_URL } from "../../constant/url.js";

const Trending = ({ trending }) => {
  const nav = useNavigate();

  const handleClickCard = () => {
    nav(`/trending/${trending.CON_UID}`, { state: trending });
  };

  return (
    <div
      onClick={handleClickCard}
      className="w-full max-h-[500px] text-center rounded-lg cursor-pointer mb-[1rem]"
    >
      <img
        className="w-full h-[200px] rounded-lg"
        src={`https://${trending.CON_IMGFILENAME}`}
        alt={`${trending.CON_TITLE} 사진`}
      />
      <h4 className="text-xl font-semibold my-[0.5rem]">
        {trending.CON_TITLE}
      </h4>
      <p className="text-sm text-gray-400">{trending.CON_DESC1}</p>
    </div>
  );
};

export default Trending;
