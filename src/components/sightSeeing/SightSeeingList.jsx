import { useEffect, useState } from "react";
import SigntSeeing from "./SigntSeeing";

const region = [
  "전체",
  "불국사권",
  "동해권",
  "서악북부권",
  "경주시내권",
  "보문관광단지권",
  "남산권",
];
const SightSeeingList = ({ sightSeeingList, setIsFiltered }) => {
  const [filterRegion, setFilterRegion] = useState("전체");


  useEffect(() => {
    setIsFiltered(filterRegion !== '전체')
  },[filterRegion,setIsFiltered])

  const filterdList =
    filterRegion === "전체"
      ? sightSeeingList
      : sightSeeingList.filter((item) => item.AREA_NAME === filterRegion);

  return (
    <>
      <div className="mb-[2rem]">
        {region.map((area, i) => (
          <span
            onClick={() => setFilterRegion(area)}
            key={i}
            className="text-sm border p-[8px] mr-[1rem] rounded-3xl border-green-200 text-green-200 hover:bg-green-200 hover:text-white"
          >
            {area}
          </span>
        ))}
      </div>
      <ul className="flex flex-col gap-[20px] ">
        {filterdList.map((sightSeeing, i) => (
          <li key={i}>
            <SigntSeeing sightSeeing={sightSeeing} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SightSeeingList;
