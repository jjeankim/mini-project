import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";

const city = "seoul";
const APP_ID = import.meta.env.VITE_WEATHER_APP_ID;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const ICON_URL = "https://openweathermap.org/img/wn";

const DayWeather = ({ icon, day }) => {
  return (
    <div className="flex items-center gap-[0.5rem]">
      <img src={icon} alt="" className="w-[50px]"/>
      <p className="font-semibold">{day}</p>
    </div>
  );
};

const Weather = () => {
  const url = `${BASE_URL}?q=${city}&units=metric&appid=${APP_ID}&lang=kr`;

  const { fetchData } = useFetch(url);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if (fetchData?.list) {
      setWeather(fetchData?.list);
    }
  }, [fetchData]);

  return (
    <div className="flex gap-[1rem] justify-end">
      {weather.length > 0 && (
        <>
          <DayWeather
            icon={`${ICON_URL}/${weather[0].weather[0].icon}@2x.png`}
            day={weather[0].weather[0].description}
          />
          <DayWeather
            icon={`${ICON_URL}/${weather[10].weather[0].icon}@2x.png`}
            day="내일"
          />
          <DayWeather
            icon={`${ICON_URL}/${weather[20].weather[0].icon}@2x.png`}
            day="모레"
          />
        </>
      )}
    </div>
  );
};

export default Weather;
