import { useLocation } from "react-router-dom";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";
import prefixImageSrc from "../../utils/prefixImageSrc";
import { IMG_BAS_URL } from "../../constant/url";
import MapComponent from "../common/MapComponent";
import Detail from "../common/Detail";
import StoreInfo from "../common/StoreInfo";

const RestaurantDetail = () => {
  const location = useLocation();
  const restaurant = location.state;

  const imgDomain = "https://www.gyeongju.go.kr/";

  console.log(restaurant);
  return (
    <section className="p-[200px] flex flex-col items-center ">
      <Detail
        storeName={restaurant.CODE_NAME}
        storeAdd={restaurant.CON_ADDRESS}
        storeTag={restaurant.CON_KEYWORDS}
        storeSrc={`${IMG_BAS_URL}/${restaurant.CON_IMGFILENAME}`}
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
        <MapComponent
          title={restaurant.CODE_NAME}
          lat={restaurant.CON_LATITUDE}
          lng={restaurant.CON_LONGITUDE}
        />
        <StoreInfo
          storeSum={restaurant.CON_SUMMARY}
          storeSite={restaurant.CON_HOMEPAGE}
          storeNum={restaurant.CON_PHONE}
        />
      </div>
    </section>
  );
};

export default RestaurantDetail;
