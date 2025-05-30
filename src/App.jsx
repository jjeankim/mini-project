import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/common/Nav";
import CafeMain from "./components/cafe/CafeMain";
import RestaurantMain from "./components/restaurant/RestaurantMain";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="/stay" />
        <Route path="/cafes" element={<CafeMain />}/>
        <Route path="/restaurants" element={<RestaurantMain />} />
        <Route path="/trending" />
        <Route path="/sightseeing" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
