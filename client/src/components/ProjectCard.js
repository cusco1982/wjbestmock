import React from "react";
import Col from "./Col";

function ProjectCard({src}) {
    return (
        <div className="col-sm-2">
            <div className="animated fadeInUp delay-1s" style={{cursor:"pointer"}}>
                <img style={{height:"700px", width:"500px", paddingBottom:"100px"}} src={src} className="" alt="WJ Best Insulation" />
            </div>
        </div>
    );
}

export default ProjectCard;