import { useNavigate } from "react-router-dom";

const SightSeeing = ({ sightSeeing }) => {
  const nav = useNavigate();

  const handleClickCard = () => {
    nav(`/sightSeeing/${sightSeeing.CODE_UID}`, { state: sightSeeing });
  };
  return (
    <div onClick={handleClickCard} className="flex gap-[2rem] border-t pt-[1rem] cursor-pointer">
      <img
        className="w-[150px] h-[100px] rounded-md"
        src={`https://${sightSeeing.CON_IMGFILENAME}`}
        alt={`${sightSeeing.CON_TITLE} 사진`}
      />
      <div className="">
        <h4 className="text-2xl font-semibold mb-[0.5rem]">{sightSeeing.CON_TITLE}</h4>
        <p className="text-sm text-gray-400 mb-[1rem]" >{sightSeeing.CON_DESC1}</p>
        <span className="text-sm border p-[8px] rounded-3xl border-green-200 text-green-200" >{sightSeeing.AREA_NAME}</span>
      </div>
    </div>
  );
};

export default SightSeeing;
