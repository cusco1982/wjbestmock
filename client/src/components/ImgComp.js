import React from 'react';



function ImgComp({ src }) {

    let imgStyles = {
        width: 100+"%",
        height: "auto"
    }

    return (
        <row>

            <img src={src} alt="slide-img" style={imgStyles}></img>
        </row>

    

    )

}



export default ImgComp;