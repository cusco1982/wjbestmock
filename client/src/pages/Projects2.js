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

                            <ul style={{ paddingLeft:"50%", listStyle:"none", fontSize:"20px" }}>
                                <li>
                                    <a href="/projects2">First gallery</a>
                                </li>
                                <li>
                                    <a href="/projects2">2nd gallery</a>
                                </li>
                                <li>
                                    <a href="/projects2">3 gallery</a>
                                </li>
                                <li>
                                    <a href="/projects2">4th gallery</a>
                                </li>
                                <li>
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