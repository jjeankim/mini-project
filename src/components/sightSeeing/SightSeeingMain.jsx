import { useEffect, useState } from "react";
import Main from "../common/Main";
import { SIGHT_SEEING_BASE_URL } from "../../constant/url";
import useFetch from "../../hook/useFetch";
import SightSeeingList from "./SightSeeingList";


const SightSeeingMain = () => {
  const [page, setPage] = useState(1);

  const url = `${SIGHT_SEEING_BASE_URL}&pageNo=${Number(page)}&numOfRows=20`;
  const { fetchData, isLoading, error } = useFetch(url);

  const [sightSeeingList, setSigthSeeingList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      setSigthSeeingList(newData);
      setTotalCount(fetchData.response.body.totalCount);
    }
  }, [fetchData, page]);

  console.log(sightSeeingList);
  return (
    <Main title="경주 권역별 관광지">
      
      <SightSeeingList sightSeeingList={sightSeeingList} />
    </Main>
  );
};

export default SightSeeingMain;
