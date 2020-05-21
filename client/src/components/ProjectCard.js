import React from "react";


function ProjectCard(src) {
    return (
        <div className="col-sm-4">
            <div className="animated fadeInUp delay-1s" style={{cursor:"pointer"}}>
                <img style={{height:"700px", width:"500px", paddingBottom:"125px"}} src={src} className="card-img-top" alt="WJ Best Insulation" />
            </div>
        </div>
    );
}

export default ProjectCard;