import Restaurant from './Restaurant'

const RestaurantList = ({ restaurantList }) => {
  
  return (
    <ul className="flex gap-[20px] flex-wrap">
      {restaurantList.map((restaurant) => (
        <li key={restaurant.CON_UID}>
          <Restaurant restaurant={restaurant} />
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;
