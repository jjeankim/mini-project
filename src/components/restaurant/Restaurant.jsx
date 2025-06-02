import { useNavigate } from "react-router-dom";
import { IMG_BAS_URL } from "../../constant/url";
import { getTagList } from "../../utils/getTags";

const Restaurant = ({ restaurant }) => {
  const nav = useNavigate()

  const handleClickCard = () => {
    nav(`/restaurant/${restaurant.CON_UID}`,{state:restaurant})
  }
  return (
    <div onClick={handleClickCard} className="w-[250px] h-[400px] text-center border-[1px] p-[20px] rounded-lg">
      <img
        className="w-[200px] h-[200px] rounded-lg"
        src={`${IMG_BAS_URL}/${restaurant.CON_IMGFILENAME}`}
        alt={`${restaurant.CON_TITLE} 사진`}
      />
      <h4 className="text-xl font-semibold my-[20px]">
        {restaurant.CON_TITLE}
      </h4>
      <p className="text-sm text-gray-400">{restaurant.CON_ADDRESS}</p>
      <p className="text-xs text-gray-300 mb-[8px]">
        {getTagList(restaurant.CON_KEYWORDS)}
      </p>
    </div>
  );
};

export default Restaurant;
