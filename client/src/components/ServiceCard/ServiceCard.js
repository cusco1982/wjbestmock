import React from "react";
import Col from "../Col";
import "./ServiceCard.css";

function ServiceCard({ src }) {
    return (
        <Col size="md-4" style={{ float: "left", paddingBottom: "20px", paddingTop: "20px" }}>

            <div className="animated fadeInUp delay-1s">
                <header>Board Insulation</header>
                <img style={{ height: "100%", width: "100%" }} src={src} className="" alt="WJ Best Insulation" />
            </div>

        </Col>
    );
}
export default ServiceCard;