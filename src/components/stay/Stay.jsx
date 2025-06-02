import { useNavigate } from "react-router-dom";
import { IMG_BAS_URL } from "../../constant/url";

const Stay = ({stay}) => {
  const nav = useNavigate()

  const handleClickCard = () => {
    nav(`/stay/${stay.CON_UID}`,{state:stay})
  }
  return (
    <div onClick={handleClickCard} className="w-[250px] max-h-[500px] text-center rounded-lg cursor-pointer mb-[1rem]">
      <img
        className="w-full h-[200px] rounded-lg"
        src={`${IMG_BAS_URL}/${stay.CON_IMGFILENAME}`}
        alt={`${stay.CON_TITLE} 사진`}
      />
      <h4 className="text-xl font-semibold my-[0.5rem]">{stay.CON_TITLE}</h4>
      <p className="text-sm text-gray-400">{stay.CON_ADDRESS}</p>
    
    </div>
  );
};

export default Stay;
