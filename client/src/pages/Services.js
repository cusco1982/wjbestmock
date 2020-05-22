import React, { Component } from "react";

import Container from "../components/Container";
import ImgGrid from "../components/ImgGrid";
import Col from "../components/Col";
import Row from "../components/Row";

import Slider from "../components/Slider";




class Services extends Component {



  render() {

    return (
      <div>



        <Container style={{ paddingTop: "20px" }}>




          <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Services</h1>

          <ImgGrid />

          <Row style={{paddingTop:"40px"}}>
            <Col size="md-6" style={{justifyContent:"center",display:"flex", fontSize:"30px"}}>
              <ul>
                <li>Mechanical Rooms</li>
                <li>Boiler Rooms</li>
                <li>Plumbing</li>
              </ul>
            </Col>
            <Col size="md-6" style={{justifyContent:"center",display:"flex", fontSize:"30px"}}>
              <ul>
                <li>Ducts</li>
                <li>Piping</li>
                <li>Industrial & Commercial</li>
              </ul>
            </Col>
          </Row>

          <Slider/>

        </Container>

      </div>
    );
  }
}

export default Services;
