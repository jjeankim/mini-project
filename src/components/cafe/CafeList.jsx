import Cafe from "./Cafe";

const CafeList = ({ cafeList }) => {
  return (
    <ul className="grid grid-cols-5 gap-5">
      {cafeList.map((cafe, i) => (
        <li key={i} className="hover:scale-[102%] transition-transform duration-300 ease-in-out" >
          <Cafe cafe={cafe} />
        </li>
      ))}
    </ul>
  );
};

export default CafeList;
