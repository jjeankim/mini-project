import Stay from "./Stay";

const StayList = ({ stayList, lastItemRef }) => {
  return (
    <ul className="grid grid-cols-5 gap-5">
      {stayList.map((stay, i) => {
        const isLast = i === stayList.length - 1;
        return (
          <li
            key={i}
            ref={isLast ? lastItemRef : null}
            className="hover:scale-[102%] transition-transform duration-300 ease-in-out"
          >
            <Stay stay={stay} />
          </li>
        );
      })}
    </ul>
  );
};

export default StayList;
