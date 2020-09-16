import React, { Component } from "react";

import i2 from "../photos/fantasy.jpg";
import i3 from "../photos/trees.jpg";
import i4 from "../photos/night.jpg";
import i5 from "../photos/astronaut.jpg";

import ServiceCard from "./ServiceCard/ServiceCard";

// import Container from "./Container";
import Row from "./Row";



class ImgGrid extends Component {

  state = {
    images: [
      {
        images: i5,
        href: "projects2"
      },
      {
        images: i2,
        href: "projects2"
      },
      {
        images: i3,
        href: "projects2"
      },
      {
        images: i4,
        href: "projects2"
      },
      {
        images: i5,
        href: "projects2"
      },
      {
        images: i2,
        href: "projects2"
      }
    ]
  };


  render() {

    return (

      <Row className="grid-row">
        {this.state.images.map((item, index) => {
          return <ServiceCard
            src={item}
            key={index} />

        })}
      </Row>
    );
  }
}



export default ImgGrid;
