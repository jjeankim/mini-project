import {getAddress} from "../../utils/getAddress"

const MainCard = ({ mainCard }) => {

  return (
    <div className="w-[300px] h-[150px] relative mb-[2rem] ">
      <img className="w-full h-full rounded-lg" src={`https://${mainCard.CON_IMGFILENAME}`} alt={`${mainCard.CON_TITLE} 사진`} />
      <p className="text-white font-semibold absolute bottom-[2.5rem] left-5">{mainCard.CON_TITLE}</p>
      <p className="text-white font-semibold absolute bottom-[1rem] left-5">{getAddress(mainCard.CON_DESC1)}</p>
    </div>
  );
};

export default MainCard;
