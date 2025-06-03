import { useLocation } from "react-router-dom"
import { IMG_BAS_URL } from "../../constant/url";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";
import Detail from "../common/Detail";
import MapComponent from "../common/MapComponent";
import StoreInfo from "../common/StoreInfo";
import prefixImageSrc from "../../utils/prefixImageSrc";


const TrendingDetail = () => {

  const location = useLocation();
  const trending = location.state


  const imgDomain = "https://www.gyeongju.go.kr/";
  return (
    <section className="p-[200px] flex flex-col items-center ">
      <Detail
        storeName={trending.CON_TITLE}
        storeAdd={trending.CON_DESC1}
        storeTag={trending.CON_KEYWORDS}
        storeSrc={`https://${trending.CON_IMGFILENAME}`}
        showTime={true}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-[2rem] mb-[2rem] pb-[0.5rem] border-b-[2px] border-black">
          상세정보
        </h3>
        <div
          className="w-[800px] mb-[2rem]"
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(
              prefixImageSrc(trending.CON_CONTENT, imgDomain)
            ),
          }}
        ></div>
        <MapComponent
          title={trending.CODE_NAME}
          lat={trending.CON_LATITUDE}
          lng={trending.CON_LONGITUDE}
        />
        <StoreInfo
          storeSum={trending.CON_SUMMARY}
          storeSite={trending.CON_HOMEPAGE}
          storeNum={trending.CON_DESC2}
        />
      </div>
    </section>
  );
}

export default TrendingDetail