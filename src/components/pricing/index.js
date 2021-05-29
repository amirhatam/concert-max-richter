import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import MyButtons from "../utils/MyButtons";

export default class Pricing extends Component {
  state = {
    pricing: [30, 50, 80],
    position: ["Lower Box", "Patron", "VIP"],
    desc: [
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. CUM QUOS TENETUR ASPERIORES IPSUM VEL QUIA NULLA HARUM QUAS LABORUM ULLAM REPREHENDERIT FUGIAT OFFICIA FACILIS DOLORES ENIM.",
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. CUM QUOS TENETUR ASPERIORES IPSUM VEL QUIA NULLA HARUM QUAS LABORUM ULLAM REPREHENDERIT FUGIAT OFFICIA FACILIS DOLORES ENIM.",
      "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. CUM QUOS TENETUR ASPERIORES IPSUM VEL QUIA NULLA HARUM QUAS LABORUM ULLAM REPREHENDERIT FUGIAT OFFICIA FACILIS DOLORES ENIM.",
    ],
    linkto: [
      "http://localhost:3000/1",
      "http://localhost:3000/2",
      "http://localhost:3000/3",
    ],
    delay: [500, 0, 500],
  };

  render() {
    const showBox = () => {
      return this.state.pricing.map((item, index) => (
        <Zoom
          delay={this.state.delay[index]}
          key={`${this.state.position}${index}`}
        >
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>{item}$</span>
                <span>{this.state.position[index]} </span>
              </div>
              <div className="pricing_description">{this.state.desc[index]}</div>
              <div >
                <MyButtons
                  text="Buy"
                  bgc="#ffa880"
                  color="fff"
                  link={this.state.linkto[index]}
                />
              </div>
            </div>
          </div>
        </Zoom>
      ));
    };
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Price</h2>
          <div className="pricing_wrapper"> {showBox()} </div>
        </div>
      </div>
    );
  }
}

// export default Pricing;
