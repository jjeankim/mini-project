import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import { RESTAURANT_BASE_URL } from "../../constant/url";
import Main from "../common/Main";
import Pagination from "../common/Pagination";
import useFetch from "../../hook/useFetch";
import LoadingSpinner from "../common/LoadingSpinner";

const RestaurantMain = () => {
  const [page, setPage] = useState(1);
  const url = `${RESTAURANT_BASE_URL}&pageNo=${page}&numOfRows=20`;
  const { fetchData, isLoading, error } = useFetch(url);

  const [restaurantList, setRestaurantList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      setRestaurantList(newData);
      setTotalCount(fetchData.response.body.totalCount);
    }
  }, [fetchData, page]);

  if (error) return <div>데이터를 불러오지 못했습니다.</div>

  return (
    <Main title="경주 테마별 음식점">
      <RestaurantList restaurantList={restaurantList} />
      {isLoading && <LoadingSpinner />}
      <Pagination page={page} setPage={setPage} totalCount={totalCount} />
    </Main>
  );
};

export default RestaurantMain;
