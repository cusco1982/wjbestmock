import React from "react";
import Col from "../Col";
import "./ServiceCard.css";
import Container from "../Container";


function ServiceCard({ src }) {
    return (
        <Col size="md-4" style={{ float: "left", paddingBottom: "20px", paddingTop: "20px" }}>
            <Container>
                {/* <header>Board Insulation</header> */}

                <img href="/" style={{ height: "100%", width: "100%" }} src={src} className="image" alt="WJ Best Insulation" />
                <div className="middle">
                    <a href="/projects" className="text">Title</a>
                </div>

            </Container>
        </Col>
    );
}
export default ServiceCard;