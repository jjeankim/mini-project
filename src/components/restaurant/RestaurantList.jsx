import Restaurant from './Restaurant'

const RestaurantList = ({ restaurantList }) => {
  
  return (
    <ul className="grid grid-cols-5 gap-5">
      {restaurantList.map((restaurant,i) => (
        <li key={i} className="hover:scale-[102%] transition-transform duration-300 ease-in-out">
          <Restaurant restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;
