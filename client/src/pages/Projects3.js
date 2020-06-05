import React, { Component } from "react";
// import API from "../utils/API";
import Wrapper from "../components/Wrapper";
// import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";

import Gallery from "../components/Gallery";

// import Slider from "../components/Slider";
// import ImgGrid from "../components/ImgGrid";


class Projects2 extends Component {

    render() {
        return (
            <div>
                <Wrapper>
                    <Row>
                        <Col size="2">

                            <ul style={{ paddingLeft:"50%",paddingTop:"40px", listStyle:"none", fontSize:"20px" }}>
                                <li style={{paddingBottom:"20px"}}>
                                    <a href="/projects2">Duct Work</a>
                                </li>
                                <li style={{paddingBottom:"20px"}}>
                                    <a href="/projects2">Pipe Insulation</a>
                                </li>
                                <li style={{paddingBottom:"20px"}}>
                                    <a href="/projects2">Tanks</a>
                                </li>
                                <li style={{paddingBottom:"20px"}}>
                                    <a href="/projects2">Plumbing</a>
                                </li>
                                <li style={{paddingBottom:"20px"}}>
                                    <a href="/projects">last gallery</a>
                                </li>

                            </ul>

                        </Col>

                        <Col size="10">

                            <Row>
                                <Gallery />            <br /><br /> <br /><br /> <br /><br /> <br /><br /><br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                            </Row>

                        </Col>

                    </Row>

                </Wrapper>
            </div>
        )
    }
}

export default Projects2;