// import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-reveal";
import MyButtons from "../utils/MyButtons";

function Discount() {
  // const [isInitial, setIsInitial] = useState(true);
  // const [discountStart, setDiscountStart] = useState(0);
  // const discountEnd = 30;

//   const percentage = () => {
//     setIsInitial(false);
//     if (discountStart < discountEnd) {
//       setDiscountStart((prevState) => prevState + 1);
//     }
//   };

//   // useEffect(() => {
    
//   //   if (!isInitial) {
//   //     setTimeout(() => {
//   //       percentage();
//   //     }, 30);
//   //   }
//   // }, [discountStart],[]);


  

//   useEffect(() => {
//     const fetchBusinesses = () => {
//         if (!isInitial) {
//         setTimeout(() => {
//           percentage();
//         }, 30);
//       }
//   };
//   fetchBusinesses();
// }, [discountStart]);

 

  
  return (
    <div className="container-discount">
      <div className="container">
        {/* <Fade onReveal={percentage} style={{ display: "inline-block" }}> */}
        <Fade  style={{ display: "inline-block" }}>
          <Slide left>
            <div className="discount_description ">
              <h3> Buy before September</h3>
              <p className="lowercase">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quos tenetur asperiores ipsum vel quia nulla harum quas laborum
                ullam reprehenderit fugiat officia facilis dolores enim.
              </p>
              <MyButtons
                text="Buy"
                bgc="#ffa800"
                color="#fff"
                link="https://google.com"
              />
            </div>
          </Slide>
          <div className="discount_percentage fontF">
            {/* <span>{discountStart}% </span> */}
            <span>30% </span>
            <span> Off</span>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Discount;
