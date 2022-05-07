import React from "react";
import Zoom from 'react-reveal/Zoom';

import icon_calendar from "../../assets/pics/icons/calendar.png"
import icon_location from "../../assets/pics/icons/location.png"

function ConcertInfo() {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="cn_wrapper">
          <Zoom left duration={500}>
            <div className="cn_item">
              <div className="cn_outer">
                <div className="cn_inner">
                  <div className="cn_icon_square bck_icons"></div>
                  <div className="cn_icon" style={{ background: `url(${icon_calendar})` }}> </div>
                  <div className="cn_title">Date of the concert</div>
                  <div className="cn_desc">10/Oct/2022</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom left duration={500} delay={500}>
            <div className="cn_item">
              <div className="cn_outer">
                <div className="cn_inner">
                  <div className="cn_icon_square bck_icons"></div>
                  <div className="cn_icon" style={{ background: `url(${icon_location})` }}></div>
                  <div className="cn_title">Address</div>
                  <div className="cn_desc">Paris</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

export default ConcertInfo;
