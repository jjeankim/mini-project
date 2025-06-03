import { useLocation } from "react-router-dom";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";
import Detail from "../common/Detail";
import MapComponent from "../common/MapComponent";
import StoreInfo from "../common/StoreInfo";

const SightSeeingDetail = () => {
  const location = useLocation();
  const sightSeeing = location.state;

  return (
    <section className="p-[200px] flex flex-col items-center ">
      <Detail
        storeName={sightSeeing.CON_TITLE}
        storeAdd={sightSeeing.CON_DESC1}
        storeTag={sightSeeing.CON_KEYWORDS}
        storeSrc={`https://${sightSeeing.CON_IMGFILENAME}`}
      
      />
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          상세정보
        </h3>
        <div
          className="w-[800px] mb-[2rem]"
          dangerouslySetInnerHTML={{
            __html: getSanitizeHTML(sightSeeing.CON_CONTENT),
          }}
        ></div>
        <MapComponent
          title={sightSeeing.CODE_NAME}
          lat={sightSeeing.CON_LATITUDE}
          lng={sightSeeing.CON_LONGITUDE}
        />
        <StoreInfo
          storeSum={sightSeeing.CON_SUMMARY}
          storeSite={sightSeeing.CON_HOMEPAGE}
          storeNum={sightSeeing.CON_DESC2}
        />
      </div>
    </section>
  );
};

export default SightSeeingDetail;
