import Trending from "./Trending"

const TreandingList = ({trendingList}) => {
  return (
    
    <ul className="grid grid-cols-5 gap-5">
        {trendingList.map((trending, i) => (
          <li key={i}>
            <Trending trending={trending} />
          </li>
        ))}
      </ul>
  )
}

export default TreandingList