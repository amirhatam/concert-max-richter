import React from "react";
import Featured from "./components/featured";
import Header from "./components/header-footer/Header";
import "./assets/styles/style.css";
import ConcertInfo from "./components/concertinfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location/index";
import Footer from "./components/header-footer/Footer";
// import MapContainer from "./components/location/MapContainer";

function App() {
  
  return (
    <div style={{ height: "1000px", backgroundColor: "#3c3c3c" }}>
      <Header />
      <Featured />
      <ConcertInfo />
      <Highlights />
      <Pricing />
      <Location/>
      {/* <MapContainer/> */}
      <Footer/>
    </div>
  );
}

export default App;
