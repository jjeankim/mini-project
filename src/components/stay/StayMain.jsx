import { useCallback, useEffect, useRef, useState } from "react"
import { STAY_BASE_URL } from "../../constant/url"
import useFetch from "../../hook/useFetch"
import Main from "../common/Main"
import StayList from "./StayList"
import LoadingSpinner from "../common/LoadingSpinner"
import EndOfData from "../common/EndOfData"

const StayMain = () => {
  const pageRef = useRef(1)
  const observerRef = useRef(null)
  const [url, setUrl] = useState(
    `${STAY_BASE_URL}&pageNo=1&numOfRows=20`
  );

  const {fetchData, isLoading, error} = useFetch(url)

  const [stayList, setStayList] = useState([])
  const [totalCount, setTotalCount] = useState(null)

  useEffect(() => {
    if (fetchData?.response?.body) {
      const newData = fetchData.response.body.items.item;
      if (pageRef.current === 1) {
        setStayList(newData);
      } else {
        setStayList((prev) => [...prev, ...newData]);
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
        stayList.length < (totalCount ?? 0)
      ) {
        
        pageRef.current += 1;
        setUrl(`${STAY_BASE_URL}&pageNo=${pageRef.current}&numOfRows=20`);
      }
    },
    [isLoading, stayList.length, totalCount]
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
    <Main title="경주 테마별 숙소">
      <StayList stayList={stayList} />
      {isLoading && <LoadingSpinner />}
      {stayList.length >= totalCount && (
        <EndOfData />
      )}
      <div ref={observerRef}></div>
    </Main>
  );
}

export default StayMain