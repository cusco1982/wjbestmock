import React from "react";
import Col from "../Col";
import "./ServiceCard.css";
import Container from "../Container";


function ServiceCard({ src }) {
    return (
        <Col size="md-4" style={{ float: "left", paddingBottom: "20px", paddingTop: "20px" }}>
            <Container>
                {/* <header>Board Insulation</header> */}
                <a href={src.href}>
                    <img style={{ height: "100%", width: "100%" }} src={src.images} className="image" alt="WJ Best Insulation" />
                </a>
                
                <div className="middle">
                    <a href={src.href} className="text">Title</a>
                </div>

            </Container>
        </Col>
    );
}
export default ServiceCard;