import { Link, useLocation } from "react-router-dom"
import getSanitizeHTML from "../../utils/getSanitizedHTLM"
import { getTagList } from "../../utils/getTags"
import { IMG_BAS_URL } from "../../constant/url";
import prefixImageSrc from "../../utils/prefixImageSrc";
import MapComponent from "../common/MapComponent";



const StayDetail = () => {
  const location = useLocation();
  const stay = location.state

  const imgDomain = "https://www.gyeongju.go.kr/";
  console.log(stay);
  
  return (
    <section className="p-[200px] flex flex-col items-center ">
      <h2 className="text-3xl mb-[0.8rem] font-semibold">{stay.CODE_NAME}</h2>
      <p className="text-md text-gray-400 mb-[2rem]">{stay.CON_ADDRESS}</p>
      <p className="text-lg text-blue-500"> {getTagList(stay.CON_KEYWORDS)}</p>
      <ul className="flex justify-center py-[0.6rem] gap-[6rem] my-[3rem] border-t border-b w-full text-gray-400 ">
        <li>사진보기</li>
        <li>상세정보</li>
        <li>영업시간</li>
        <li>홈페이지</li>
      </ul>
      <img
        className="w-[600px] rounded-md"
        src={`${IMG_BAS_URL}/${stay.CON_IMGFILENAME}`}
        alt={`${stay.CODE_NAME} 사진`}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          상세정보
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(
              prefixImageSrc(stay.CON_CONTENT, imgDomain

              )
            ),
          }}
        ></p>
        <MapComponent
          title={stay.CODE_NAME}
          lat={stay.CON_LATITUDE}
          lng={stay.CON_LONGITUDE}
        />
        <h3
          id="time"
          className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black"
        >
          영업시간
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(stay.CON_SUMMARY),
          }}
        ></p>
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          홈페이지
        </h3>
        <Link to={stay.CON_HOMEPAGE} className="underline underline-offset-4">
          {stay.CON_HOMEPAGE}
        </Link>
      </div>
    </section>
  )
}

export default StayDetail