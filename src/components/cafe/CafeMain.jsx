import { useEffect, useState } from "react";
import CafeList from "./CafeList";
import Main from "../common/Main";

const CAFE_BASE_URL =
  "https://apis.data.go.kr/5050000/cafeInfoService/getCafeInfo?serviceKey=0iqHiUl6ckW8fz8x6JSsFFaZvFaMBZVwckobRhG2pBez3lAOuq9tizDhLNj2mWued0EkmPOfHwvR51bXAephDA==";

const CafeMain = () => {
  const [cafeList, setCafeList] = useState([]);
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(null)



  useEffect(() => {
    const getCafeList = async () => {
      try {
        const res = await fetch(`${CAFE_BASE_URL}&pageNo=${page}&numOfRows=${20}`);
        const data = await res.json();
        setCafeList(data.response.body.items.item);
        setTotalCount(data.response.body.totalCount)
      } catch (error) {
        console.error("카페 리스트 가져오기 실패!", error);
      }
    };
    getCafeList();
  }, []);

  console.log(cafeList);
  console.log(totalCount); //77
  
  return (
    <Main title="경주 카페 및 전통 찻집" >
      <CafeList cafeList={cafeList}/>
    </Main>
  );
};

export default CafeMain;
