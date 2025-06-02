import Stay from "./Stay"

const StayList = ({stayList}) => {
  return (
    <ul className="flex gap-[20px] flex-wrap justify-center">
        {stayList.map((stay, i) => (
          <li key={i}>
            <Stay stay={stay} />
          </li>
        ))}
      </ul>
  )
}

export default StayList