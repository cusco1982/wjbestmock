import React, { Component } from "react";

import i2 from "../pics/fantasy.jpg";
import i3 from "../pics/trees.jpg";
import i4 from "../pics/night.jpg";
import i5 from "../pics/astronaut.jpg";

import ServiceCard from "./ServiceCard";

// import Container from "./Container";
import Row from "./Row";



class ImgGrid extends Component {

  state = {
    images: [
      i5,
      i2,
      i3,
      i4,
      i5,
      i2
    ]
  };


  render() {

    return (

          <Row>
            {this.state.images.map((item, index) => {
              return <ServiceCard key={index} src={item} />

            })}
          </Row>
    );
  }
}



export default ImgGrid;
