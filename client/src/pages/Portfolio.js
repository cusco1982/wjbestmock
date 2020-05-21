import React, { Component } from "react";

import i2 from "../pics/fantasy.jpg";
import i3 from "../pics/trees.jpg";
import i4 from "../pics/night.jpg";
import i5 from "../pics/astronaut.jpg";

import ImgComp from "../components/ImgComp";


class Portfolio extends Component {

  render() {

    let sliderArr = [
      <ImgComp src={i5} />,
      <ImgComp src={i2} />,
      <ImgComp src={i3} />,
      <ImgComp src={i4} />,
      <ImgComp src={i5} />
  ];

    return (
      <div className="slider">
        {sliderArr.map((item, index) => {
          return (
            <div key={index} className="">
              {item}
            </div>
          );
        })}

      </div>

    );
  }
}



export default Portfolio;
