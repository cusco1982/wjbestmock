import React from "react";
import Col from "./Col";

function ProjectCard({src}) {
    return (
        <Col size="md-4" style={{float:"left",background:"white", paddingBottom:"20px",paddingTop:"20px"}}>


            <div className="animated fadeInUp delay-1s" style={{cursor:"pointer"}}>
                <img style={{height:"100%", width:"100%"}} src={src} className="" alt="WJ Best Insulation" />
            </div>

        </Col>

    );
}

export default ProjectCard;