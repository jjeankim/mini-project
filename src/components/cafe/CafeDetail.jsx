import { Link, useLocation } from "react-router-dom";
import { getTagList } from "../../utils/getTags";
import { IMG_BAS_URL } from "../../constant/url";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";
import prefixImageSrc from "../../utils/prefixImageSrc";
import MapComponent from "../common/MapComponent";

const CafeDetail = () => {
  const location = useLocation();
  const cafe = location.state;

  const imgDomain = "https://www.gyeongju.go.kr/";

  console.log(cafe);

  return (
    <section className="p-[200px] flex flex-col items-center ">
      <h2 className="text-3xl mb-[0.8rem] font-semibold">{cafe.CODE_NAME}</h2>
      <p className="text-md text-gray-400 mb-[2rem]">{cafe.CON_ADDRESS}</p>
      <p className="text-lg text-blue-500"> {getTagList(cafe.CON_KEYWORDS)}</p>
      <ul className="flex justify-center py-[0.6rem] gap-[6rem] my-[3rem] border-t border-b w-full text-gray-400 ">
        <li>사진보기</li>
        <li>상세정보</li>
        <li>영업시간</li>
        <li>홈페이지</li>
      </ul>
      <img
        className="w-[600px] rounded-md"
        src={`${IMG_BAS_URL}/${cafe.CON_IMGFILENAME}`}
        alt={`${cafe.CODE_NAME} 사진`}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          상세정보
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(
              prefixImageSrc(cafe.CON_CONTENT, imgDomain)
            ),
          }}
        ></p>
        <MapComponent
          title={cafe.CODE_NAME}
          lat={cafe.CON_LATITUDE}
          lng={cafe.CON_LONGITUDE}
        />
        <h3
          id="time"
          className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black"
        >
          영업시간
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(cafe.CON_SUMMARY),
          }}
        ></p>
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          홈페이지
        </h3>
        <Link to={cafe.CON_HOMEPAGE} className="underline underline-offset-4">
          {cafe.CON_HOMEPAGE}
        </Link>
      </div>
    </section>
  );
};

export default CafeDetail;
