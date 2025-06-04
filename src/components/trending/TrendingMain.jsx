import { useCallback, useEffect, useRef, useState } from "react";
import { TRENDING_BASE_URL } from "../../constant/url";
import useFetch from "../../hook/useFetch";
import Main from "../common/Main";
import TreandingList from "./TreandingList";
import EndOfData from "../common/EndOfData";
import LoadingSpinner from "../common/LoadingSpinner"

const TrendingMain = () => {
  const pageRef = useRef(1);
  const observerRef = useRef(null);
  const [url, setUrl] = useState(`${TRENDING_BASE_URL}&pageNo=1&numOfRows=20`);

  const { fetchData, isLoading, error } = useFetch(url);

  const [trendingList, setTrendingList] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    if (fetchData?.response.body) {
      const newData = fetchData.response.body.items.item;
      if (pageRef.current === 1) {
        setTrendingList(newData);
      } else {
        setTrendingList((prev) => [...prev, ...newData]);
      }
      setTotalCount(fetchData.response.body.totalCount);
    }
  }, [fetchData]);

  const handleObserver = useCallback(
    (entries) => {
      const [entry] = entries;
      if (
        entry.isIntersecting &&
        !isLoading &&
        trendingList.length < (totalCount ?? 0)
      ) {
        pageRef.current += 1;
        setUrl(`${TRENDING_BASE_URL}&pageNo=${pageRef.current}&numOfRows=20`);
      }
    },
    [isLoading, trendingList.length, totalCount]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    const target = observerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [handleObserver]);

  if (error) return <div>데이터를 불러오지 못했습니다.</div>

  return (
    <Main title="황리단길 핫 플레이스">
      <TreandingList trendingList={trendingList} />
      {isLoading && <LoadingSpinner />}
      {trendingList.length >= totalCount && <EndOfData />}
      <div ref={observerRef}></div>
    </Main>
  );
};

export default TrendingMain;
