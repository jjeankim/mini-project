import { useEffect, useState } from "react";
import Main from "../common/Main";
import { SIGHT_SEEING_BASE_URL } from "../../constant/url";
import useFetch from "../../hook/useFetch";
import SightSeeingList from "./SightSeeingList";
import AddMoreBtn from "../common/AddMoreBtn";
import LoadingSpinner from "../common/LoadingSpinner";

const SightSeeingMain = () => {
  const url = `${SIGHT_SEEING_BASE_URL}&pageNo=1&numOfRows=163`;
  const { fetchData, error } = useFetch(url);

  const [sightSeeingList, setSigthSeeingList] = useState([]);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      setSigthSeeingList((prev) => [...prev, ...newData]);
      
    }
  }, [fetchData]);

  if (error) return <div>데이터를 불러오지 못했습니다.</div>;

  return (
    <Main title="경주 권역별 관광지">
      <SightSeeingList
        sightSeeingList={sightSeeingList}
       />
    </Main>
  );
};

export default SightSeeingMain;
