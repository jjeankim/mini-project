import { IMG_BAS_URL } from "../../api/fetch";

const Restaurant = ({restaurant}) => {

  console.log(restaurant)
  const tagList = restaurant.CON_KEYWORDS.split(",").map((tag) => `#${tag.trim()}`);
  return (
    <div className="w-[250px] max-h-[500px] text-center border-[1px] p-[20px] rounded-lg">
      <img
        className="w-[200px] h-[200px] rounded-lg"
        src={`${IMG_BAS_URL}/${restaurant.CON_IMGFILENAME}`}
        alt={`${restaurant.CON_TITLE} 사진`}
      />
      <h4 className="text-xl font-semibold my-[20px]">{restaurant.CON_TITLE}</h4>
      <p className="text-sm text-gray-400">{restaurant.CON_ADDRESS}</p>
      <p className="text-xs text-gray-300 mb-[8px]">{tagList.join("")}</p>
    </div>
  );
};

export default Restaurant;
