import { Link, useLocation } from "react-router-dom";
import { IMG_BAS_URL } from "../../constant/url";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";
import prefixImageSrc from "../../utils/prefixImageSrc";
import MapComponent from "../common/MapComponent";
import Detail from "../common/Detail";
import StoreInfo from "../common/StoreInfo";

const CafeDetail = () => {
  const location = useLocation();
  const cafe = location.state;

  const imgDomain = "https://www.gyeongju.go.kr/";

  return (
    <section className="p-[200px] flex flex-col items-center ">
      <Detail
        storeName={cafe.CODE_NAME}
        storeAdd={cafe.CON_ADDRESS}
        storeTag={cafe.CON_KEYWORDS}
        storeSrc={`${IMG_BAS_URL}/${cafe.CON_IMGFILENAME}`}
        showTime={true}
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          상세정보
        </h3>
        <div
          className="w-[800px] mb-[2rem]"
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(
              prefixImageSrc(cafe.CON_CONTENT, imgDomain)
            ),
          }}
        ></div>
        <MapComponent
          title={cafe.CODE_NAME}
          lat={cafe.CON_LATITUDE}
          lng={cafe.CON_LONGITUDE}
        />
        <StoreInfo
          storeSum={cafe.CON_SUMMARY}
          storeSite={cafe.CON_HOMEPAGE}
          storeNum={cafe.CON_PHONE}
        />
      </div>
    </section>
  );
};

export default CafeDetail;
