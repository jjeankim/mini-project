import Cafe from "./Cafe"


const CafeList = ({cafeList}) => {
  return (
    <ul className="flex gap-[20px] flex-wrap">
      {cafeList.map((cafe) => (
        <li key={cafe.CON_UID}>
          <Cafe cafe={cafe}/>
        </li>
      ))}
    </ul>
  )
}

export default CafeList