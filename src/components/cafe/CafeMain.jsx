import { useEffect, useState } from "react";
import CafeList from "./CafeList";
import Main from "../common/Main";
import AddMoreBtn from "../common/AddMoreBtn";
import useFetch from "../../hook/useFetch";
import { CAFE_BASE_URL } from "../../constant/url";
import LoadingSpinner from "../common/LoadingSpinner";

const CafeMain = () => {
  const [page, setPage] = useState(1);

  const url =`${CAFE_BASE_URL}&pageNo=${page}&numOfRows=20`;
  const { fetchData, isLoading, error } = useFetch(url);

  const [cafeList, setCafeList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      setCafeList((prev) => (page === 1 ? newData : [...prev, ...newData]));
      setTotalCount(fetchData.response.body.totalCount);
    }
  }, [fetchData, page]);

  if (error) return <div>데이터를 불러오지 못했습니다.</div>

  return (
    <Main title="경주 카페 및 전통 찻집">
      <CafeList cafeList={cafeList} />
      <AddMoreBtn
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        isLoading={isLoading}
      />
      {isLoading && <LoadingSpinner />}
      
    </Main>
  );
};

export default CafeMain;
