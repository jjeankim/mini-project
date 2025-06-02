import { useEffect, useRef, useState } from "react";
import { TRENDING_BASE_URL } from "../../constant/url";
import useFetch from "../../hook/useFetch";
import Main from "../common/Main";
import TreandingList from "./TreandingList";

const TrendingMain = () => {
  const ref = useRef(1);

  const url = `${TRENDING_BASE_URL}&pageNo=${Number(ref)}&numOfRows=20`;

  const { fetchData, isLoading, error } = useFetch(url);

  const [trendingList, setTrendingList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      setTrendingList(newData);
      setTotalCount(fetchData.response.body.totalCount);
    }
  }, [fetchData, ref]);

  if (error) return <div>데이터를 불러오지 못했습니다.</div>;
  if (isLoading) return <div>데이터 불러오는 중...</div>;

  console.log(trendingList);
  console.log(totalCount);

  return <Main title="황리단길 핫 플레이스">
    <TreandingList trendingList={trendingList}/>
  </Main>;
};

export default TrendingMain;
