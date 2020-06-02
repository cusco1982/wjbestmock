import React, { Component } from "react";

import i2 from "../pics/fantasy.jpg";
import i3 from "../pics/trees.jpg";
import i4 from "../pics/night.jpg";
import i5 from "../pics/astronaut.jpg";

import ServiceCard from "./ServiceCard/ServiceCard";

// import Container from "./Container";
import Row from "./Row";



class ImgGrid extends Component {

  state = {
    images: [
      {
        images: i5,
        href: "/"
      },
      {
        images: i2,
        href: "projects2"
      },
      {
        images: i3,
        href: "www.cnn.com"
      },
      {
        images: i4,
        href: "wwww.google.com"
      },
      {
        images: i5,
        href: "www.facebook.com"
      },
      {
        images: i2,
        href: "www.instagram.com"
      }
    ]
  };


  render() {

    return (

      <Row className="grid-row">
        {this.state.images.map((item, index) => {
          return <ServiceCard
            src={item.images}
            href={item.href}
            key={index} />

        })}
      </Row>
    );
  }
}



export default ImgGrid;
