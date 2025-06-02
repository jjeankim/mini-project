import { useNavigate } from "react-router-dom";

const SigntSeeing = ({ signtSeeing }) => {
  const nav = useNavigate();

  const handleClickCard = () => {
    nav(`${signtSeeing}/${signtSeeing.CODE_UID}`, { state: signtSeeing });
  };
  return (
    <div onClick={handleClickCard} className="flex gap-[2rem] border-t pt-[1rem]">
      <img
        className="w-[150px] h-[100px] rounded-md"
        src={`https://${signtSeeing.CON_IMGFILENAME}`}
        alt={`${signtSeeing.CON_TITLE} 사진`}
      />
      <div className="">
        <h4 className="text-2xl font-semibold mb-[0.5rem]">{signtSeeing.CON_TITLE}</h4>
        <p className="text-sm text-gray-400 mb-[1rem]" >{signtSeeing.CON_DESC1}</p>
        <span className="text-sm border p-[8px] rounded-3xl border-green-200 text-green-200" >{signtSeeing.AREA_NAME}</span>
      </div>
    </div>
  );
};

export default SigntSeeing;
