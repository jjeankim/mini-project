import { Link } from "react-router-dom";
import getSanitizeHTML from "../../utils/getSanitizedHTLM";

const StoreInfo = ({ storeSum, storeSite,storeNum }) => {
  return (
    <>
      <>
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          운영시간
        </h3>

        {storeSum ? (
          <div
            dangerouslySetInnerHTML={{
              __html: getSanitizeHTML(storeSum),
            }}
          ></div>
        ) : (
          <div>운영시간 정보가 없습니다.</div>
        )}
      </>
      <>
        <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
          문의전화
        </h3>
        {storeNum ? (<p>
          {storeNum}
        </p>) : (<div>문의전화 정보가 없습니다.</div>) }
      </>
      <h3 className="text-xl font-semibold mt-[2rem] mb-[1rem] pb-[0.5rem] border-b-[2px] border-black">
        홈페이지
      </h3>
      {storeSite ? (
        <Link to={storeSite} className="underline underline-offset-4">
          {storeSite}
        </Link>
      ) : (
        <div>홈페이지를 운영하지 않습니다.</div>
      )}
    </>
  );
};

export default StoreInfo;
