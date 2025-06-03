import { getTagList } from "../../utils/getTags";

const Detail = ({storeName, storeAdd, storeTag ="" ,storeSrc }) => {
  return (
    <>
      <h2 className="text-3xl mb-[0.8rem] font-semibold">{storeName}</h2>
      <p className="text-md text-gray-400 mb-[2rem]">{storeAdd}</p>
      <p className="text-lg text-blue-500"> {getTagList(storeTag)}</p>
      <ul className="flex justify-center py-[0.6rem] gap-[6rem] my-[3rem] border-t border-b w-[800px] text-gray-400 ">
        <li>상세정보</li>
        <li>운영시간</li>
        <li>문의전화
        </li>
        <li>홈페이지</li>
      </ul>
      <img
        className="w-[600px] rounded-md"
        src={`${storeSrc}`}
        alt={`${storeName} 사진`}
      />
    </>
  );
};

export default Detail;
