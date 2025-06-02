import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Nav";
import CafeMain from "./components/cafe/CafeMain";
import RestaurantMain from "./components/restaurant/RestaurantMain";
import CafeDetail from "./components/cafe/CafeDetail";
import MainSwiper from "./components/common/MainSwiper";
import TrendingMain from "./components/trending/trendingMain";
import StayMain from "./components/stay/StayMain"
import SightSeeingMain from "./components/sightSeeing/SightSeeingMain";
import StayDetail from "./components/stay/StayDetail";


function App() {
  return (
    

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainSwiper />} />
        <Route path="/stay" element={<StayMain />}/>
        <Route path="/stay/:id" element={<StayDetail />}/>
        <Route path="/cafe" element={<CafeMain />} />
        <Route path="/cafe/:id" element={<CafeDetail />} />
        <Route path="/restaurant" element={<RestaurantMain />} />
        <Route path="/restaurant/:id" element={<CafeDetail />}/>
        <Route path="/trending" element={<TrendingMain />}/>
        {/* <Route path="/trending/:id" element={<TrendingDetatil />}/> */}
        <Route path="/sightseeing" element={<SightSeeingMain />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
