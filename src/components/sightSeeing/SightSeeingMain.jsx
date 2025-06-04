import { useEffect, useState } from "react";
import Main from "../common/Main";
import { SIGHT_SEEING_BASE_URL } from "../../constant/url";
import useFetch from "../../hook/useFetch";
import SightSeeingList from "./SightSeeingList";
import AddMoreBtn from "../common/AddMoreBtn";
import LoadingSpinner from "../common/LoadingSpinner";

const SightSeeingMain = () => {
  const [page, setPage] = useState(1);
  const [isFilterd, setIsFiltered] = useState(false)

  const url = `${SIGHT_SEEING_BASE_URL}&pageNo=${page}&numOfRows=20`;
  const { fetchData, isLoading, error } = useFetch(url);

  const [sightSeeingList, setSigthSeeingList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      setSigthSeeingList(prev => [...prev, ...newData]);
      setTotalCount(fetchData.response.body.totalCount);
    }
  }, [fetchData, page]);

  if (error) return <div>데이터를 불러오지 못했습니다.</div>

  return (
    <Main title="경주 권역별 관광지">
      <SightSeeingList sightSeeingList={sightSeeingList} setIsFiltered={setIsFiltered} />
      {isLoading && <LoadingSpinner />}
      <AddMoreBtn
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        isLoading={isLoading}
        disabled ={isFilterd}
      />
    </Main>
  );
};

export default SightSeeingMain;
