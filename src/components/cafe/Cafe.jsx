import { useNavigate } from "react-router-dom";
import { IMG_BAS_URL } from "../../constant/url";
import { getTagList } from "../../utils/getTags";

const Cafe = ({ cafe }) => {
  const nav = useNavigate();

  const handleClickCard = () => {
    nav(`/cafe/${cafe.CON_UID}`, { state: cafe });
  };

  return (
    <div
      onClick={handleClickCard}
      className="w-[100%] h-[400px] text-center border-[1px] p-[20px] rounded-lg overflow-hidden"
    >
      <img
        className="w-[100%] h-[200px] rounded-lg"
        src={`${IMG_BAS_URL}/${cafe.CON_IMGFILENAME}`}
        alt={`${cafe.CON_TITLE} 사진`}
      />
      <h4 className="text-xl font-semibold my-[20px]">{cafe.CON_TITLE}</h4>
      <p className="text-sm text-gray-400">{cafe.CON_ADDRESS}</p>
      <p className="text-xs text-gray-300 mb-[8px]">
        {getTagList(cafe.CON_KEYWORDS)}
      </p>
    </div>
  );
};

export default Cafe;
