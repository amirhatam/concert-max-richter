import React, { useEffect, useState } from "react";
import Slide from "react-reveal/Slide";

function Countdown() {
  const deadline = "oct, 10, 2021";
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  const countDownCalculator = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);
    }
  };

  useEffect(() => {
    setInterval(() => countDownCalculator(deadline), 1000);
  }, []);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">D Day</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{days}</div>
            <div className="countdown_tag">Days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time"> {hours} </div>
            <div className="countdown_tag">Hours</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time"> {minutes}</div>
            <div className="countdown_tag">Minutes</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time"> {seconds} </div>
            <div className="countdown_tag">Seconds</div>
          </div>
        </div>
      </div>
     </Slide>
  );
}

export default Countdown;
