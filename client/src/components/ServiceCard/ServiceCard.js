import React from "react";
import Col from "../Col";
import "./ServiceCard.css";
import Container from "../Container";


function ServiceCard({ src }) {
    return (
        <Col size="md-4" style={{ float: "left", paddingBottom: "20px", paddingTop: "20px" }}>
            <Container>

                    <header>Board Insulation</header>
                    <img style={{ height: "100%", width: "100%" }} src={src} className="" alt="WJ Best Insulation" />
                    <div className="middle">
                        <div className="inside-text">
                            Hello World
                        </div>
                    </div>

            </Container>
        </Col>
    );
}
export default ServiceCard;