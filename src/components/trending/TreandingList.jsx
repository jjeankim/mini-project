import Trending from "./Trending"

const TreandingList = ({trendingList}) => {
  return (
    
    <ul className="flex gap-[20px] flex-wrap justify-center">
        {trendingList.map((trending, i) => (
          <li key={i}>
            <Trending trending={trending} />
          </li>
        ))}
      </ul>
  )
}

export default TreandingList