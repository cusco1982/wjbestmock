import React, { Component } from "react";

import i2 from "../pics/fantasy.jpg";
import i3 from "../pics/trees.jpg";
import i4 from "../pics/night.jpg";
import i5 from "../pics/astronaut.jpg";

import ProjectCard from "../components/ProjectCard";


class Portfolio extends Component {

  render() {

    let sliderArr = [
      <ProjectCard src={i5} />,
      <ProjectCard src={i2} />,
      <ProjectCard src={i3} />,
      <ProjectCard src={i4} />,
      <ProjectCard src={i5} />
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
