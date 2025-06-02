import { useNavigate } from "react-router-dom";
import { getAddress } from "../../utils/getAddress.js"

const Trending = ({ trending }) => {
  const nav = useNavigate();

  console.log(getAddress(trending.CON_DESC1))
  const handleClickCard = () => {
    nav(`/trending/${trending.CODE_UID}`, { state: trending });
  };

  return (
    <div
      onClick={handleClickCard}
      className="w-[250px] max-h-[500px] text-center rounded-lg cursor-pointer mb-[1rem]"
    >
      <img
        className="w-full h-[200px] rounded-lg"
        src={`https://${trending.CON_IMGFILENAME}`}
        alt={`${trending.CON_TITLE} 사진`}
      />
      <h4 className="text-xl font-semibold my-[0.5rem]">
        {trending.CON_TITLE}
      </h4>
      <p className="text-sm text-gray-400">{getAddress(trending.CON_DESC1).join(" ")}</p>
    </div>
  );
};

export default Trending;
