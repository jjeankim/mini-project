import { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import { RESTAURANT_BASE_URL } from "../../api/fetch";
import Main from "../common/Main";

const RestaurantMain = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const getRestaurantList = async () => {
      try {
        const res = await fetch(RESTAURANT_BASE_URL);
        const data = await res.json();
        setRestaurantList(data.response.body.items.item);
      } catch (error) {
        console.error("음식점 정보를 가져 오지 못했습니다!", error);
      }
    };
    getRestaurantList()
  }, []);
  console.log(restaurantList)
  return (
    <Main title="경주 테마별 음식점">
      <RestaurantList restaurantList={restaurantList} />
    </Main>
  );
};

export default RestaurantMain;
