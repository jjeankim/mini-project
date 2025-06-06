import { useLocation } from "react-router-dom"
import getSanitizeHTML from "../../utils/getSanitizedHTLM"
import { IMG_BAS_URL } from "../../constant/url";
import prefixImageSrc from "../../utils/prefixImageSrc";
import MapComponent from "../common/MapComponent";
import Detail from "../common/Detail";
import StoreInfo from "../common/StoreInfo";


const StayDetail = () => {
  const location = useLocation();
  const stay = location.state

  const imgDomain = "https://www.gyeongju.go.kr/";
  
  return (
    <section className="p-[200px] flex flex-col items-center ">
      <Detail
        storeName={stay.CODE_NAME}
        storeAdd={stay.CON_ADDRESS}
        storeTag={stay.CON_KEYWORDS}
        storeSrc={`${IMG_BAS_URL}/${stay.CON_IMGFILENAME}`}
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
              prefixImageSrc(stay.CON_CONTENT, imgDomain)
            ),
          }}
        ></div>
        <MapComponent
          title={stay.CODE_NAME}
          lat={stay.CON_LATITUDE}
          lng={stay.CON_LONGITUDE}
        />
        <StoreInfo
          storeSum={stay.CON_SUMMARY}
          storeSite={stay.CON_HOMEPAGE}
          storeNum={stay.CON_PHONE}
        />
      </div>
    </section>
  );
}

export default StayDetail