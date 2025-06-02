import { useEffect, useRef, useState } from "react"
import { STAY_BASE_URL } from "../../constant/url"
import useFetch from "../../hook/useFetch"
import Main from "../common/Main"
import StayList from "./StayList"


const StayMain = () => {
  const pageRef = useRef(1)

  const url = `${STAY_BASE_URL}&pageNo=${Number(pageRef)}&numOfRows=20`
  const {fetchData, isLoading, error} = useFetch(url)

  const [styaList, setStayList] = useState([])
  const [totalCount, setTotalCount] = useState(null)

  useEffect(() => {
    if(fetchData?.response.body) {
      const newData = fetchData.response.body.items.item
      setStayList(newData)
      setTotalCount(fetchData.response.body.totalCount)
    }
  },[fetchData,pageRef])

  console.log(styaList)

  if (error) return <div>데이터를 불러오지 못했습니다.</div>
  if (isLoading) return <div>데이터 불러오는 중...</div>

  return (
   <Main title="경주 테마별 숙소">
    <StayList stayList={styaList}/>
 
   </Main>
  )
}

export default StayMain