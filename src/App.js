import React from "react";
import {Element} from "react-scroll"

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

      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="ConcertInfo">
        <ConcertInfo />
      </Element>
      <Element name="Highlights">
        <Highlights />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>
      <Element name="Location">
        <Location />
      </Element>

      {/* <MapContainer/> */}

      <Footer />
    </div>
  );
}

export default App;
