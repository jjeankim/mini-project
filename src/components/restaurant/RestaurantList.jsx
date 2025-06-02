import Restaurant from './Restaurant'

const RestaurantList = ({ restaurantList }) => {
  
  return (
    <ul className="flex gap-[20px] flex-wrap justify-center">
      {restaurantList.map((restaurant,i) => (
        <li key={i}>
          <Restaurant restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;
