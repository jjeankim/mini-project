import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import MainCard from "./MainCard";
import { useNavigate } from "react-router-dom";

const MainCardList = ({ url, title, type }) => {
  const { fetchData } = useFetch(url);
  const [mainCardList, setMainCardList] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    if (fetchData?.response.body) {
      const data = fetchData.response.body.items.item;
      setMainCardList(data);
    }
  }, [fetchData]);

  const handleClickBtn = () => {
    if (type === "핫플레이스") nav("/trending");
    else nav("sightseeing");
  };

  return (
    <div className="relative">
      <h2 className="mb-[2rem] text-2xl font-semibold">{title}</h2>
      <button
        type="button"
        onClick={handleClickBtn}
        className="absolute right-0 top-[1rem] text-gray-400 underline underline-offset-4 "
      >
        더 알아보기
      </button>
      <div className="flex gap-2">
        {mainCardList.map((mainCard, i) => (
          <MainCard key={i} mainCard={mainCard} />
        ))}
      </div>
    </div>
  );
};

export default MainCardList;
