import React from "react";
import Fade from "react-reveal/Fade";

function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22246.187205108155!2d2.3312041806919157!3d48.86391696021709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e30d4668339%3A0xa9abf21c286d0767!2sPalais%20Garnier!5e0!3m2!1sfr!2sfr!4v1622225146637!5m2!1sfr!2sfr"
        width="100%"
        height="500px"
        allowFullScreen
        title="map"
      ></iframe>
      <Fade delay={1000}>
        <div className="location_tag">
          <div>Location</div>
        </div>
      </Fade>
    </div>
  );
}

export default Location;
