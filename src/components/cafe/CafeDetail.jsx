import { useLocation } from "react-router-dom";
import { getTagList } from "../../utils/getTags";
import { IMG_BAS_URL } from "../../api/fetch";

const CafeDetail = () => {
  const location = useLocation();
  const cafe = location.state;

  console.log(cafe);

  return (
    <section className="p-[200px]">
      <h2 className="text-4xl">{cafe.CODE_NAME}</h2>
      <p className="text-2lg">{cafe.CON_ADDRESS}</p>
      <p className="text-lg text-gray-400"> {getTagList(cafe.CON_KEYWORDS)}</p>
      <ul>
        <li>사진보기</li>
        <li>상세정보</li>
        <li>영업시간</li>
        <li>홈페이지</li>
      </ul>
      <img className="w-[600px]"
        src={`${IMG_BAS_URL}/${cafe.CON_IMGFILENAME}`}
        alt={`${cafe.CODE_NAME} 사진`}
      />
      <h3>상세정보</h3>
      <p dangerouslySetInnerHTML={{__html:cafe.CON_CONTENT}}></p>
      <h3>영업시간</h3>
        <p>{cafe.CON_SUMMARY}</p>
        <h3>홈페이지</h3>
        <p>{cafe.CON_HOMEPAGE}</p>
    </section>
  );
};

export default CafeDetail;
