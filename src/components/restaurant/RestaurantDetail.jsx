import { useLocation } from "react-router-dom";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";
import { getTagList } from "../../utils/getTags";
import prefixImageSrc from "../../utils/prefixImageSrc";
import { IMG_BAS_URL } from "../../constant/url";
import MapComponent from "../common/MapComponent";

const RestaurantDetail = () => {
  const location = useLocation();
  const restaurant = location.state;

  const imgDomain = "https://www.gyeongju.go.kr/";

  console.log(restaurant);
  return (
    <section className="p-[200px] flex flex-col items-center ">
      <h2 className="text-3xl mb-[0.8rem] font-semibold">{restaurant.CODE_NAME}</h2>
      <p className="text-md text-gray-400 mb-[2rem]">{restaurant.CON_ADDRESS}</p>
      <p className="text-lg text-blue-500"> {getTagList(restaurant.CON_KEYWORDS)}</p>
      <ul className="flex justify-center py-[1rem] gap-[4rem] my-[3rem] border-t border-b w-[70%] text-gray-400 ">
        <li>사진보기</li>
        <li>상세정보</li>
        <li>영업시간</li>
        <li>홈페이지</li>
      </ul>
      <img
        className="w-[600px] rounded-md"
        src={`${IMG_BAS_URL}/${restaurant.CON_IMGFILENAME}`}
        alt={`${restaurant.CODE_NAME} 사진`}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          상세정보
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(
              prefixImageSrc(restaurant.CON_CONTENT, imgDomain)
            ),
          }}
        ></p>
        <MapComponent title={restaurant.CODE_NAME} lat={restaurant.CON_LATITUDE} lng={restaurant.CON_LONGITUDE} />
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          영업시간
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(restaurant.CON_SUMMARY),
          }}
        ></p>
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          홈페이지
        </h3>
        <Link to={restaurant.CON_HOMEPAGE} className="underline underline-offset-4">
        {restaurant.CON_HOMEPAGE}
        </Link>
      </div>
    </section>
  );
};

export default RestaurantDetail;
