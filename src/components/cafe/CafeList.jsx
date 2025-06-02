import Cafe from "./Cafe";

const CafeList = ({ cafeList }) => {
  return (
      <ul className="flex gap-[20px] flex-wrap justify-center">
        {cafeList.map((cafe, i) => (
          <li key={i}>
            <Cafe cafe={cafe} />
          </li>
        ))}
      </ul>
    
  );
};

export default CafeList;
