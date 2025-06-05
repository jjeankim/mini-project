import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Nav";
import CafeMain from "./components/cafe/CafeMain";
import RestaurantMain from "./components/restaurant/RestaurantMain";
import CafeDetail from "./components/cafe/CafeDetail";
import MainSwiper from "./components/home/MainSwiper";
import TrendingMain from "./components/trending/TrendingMain";
import StayMain from "./components/stay/StayMain";
import SightSeeingMain from "./components/sightSeeing/SightSeeingMain";
import StayDetail from "./components/stay/StayDetail";
import SightSeeingDetail from "./components/sightSeeing/SightSeeingDetail";
import TrendingDetail from "./components/trending/TrendingDetail";
import Footer from "./components/common/Footer";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainSwiper />} />
        <Route path="/stay" element={<StayMain />} />
        <Route path="/stay/:id" element={<StayDetail />} />
        <Route path="/cafe" element={<CafeMain />} />
        <Route path="/cafe/:id" element={<CafeDetail />} />
        <Route path="/restaurant" element={<RestaurantMain />} />
        <Route path="/restaurant/:id" element={<CafeDetail />} />
        <Route path="/trending" element={<TrendingMain />} />
        <Route path="/trending/:id" element={<TrendingDetail />} />
        <Route path="/sightseeing" element={<SightSeeingMain />} />
        <Route path="/sightseeing/:id" element={<SightSeeingDetail />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
