import React, { useState } from 'react';
import "../components/Sliders.scss";
import ImgComp from "../components/ImgComp";
// import i1 from "../photos/ductwork1.jpg";
import i2 from "../photos/fantasy.jpg";
import i3 from "../photos/trees.jpg";
import i4 from "../photos/night.jpg";
import i5 from "../photos/astronaut.jpg";

// import Row from "../components/Row"


function New() {

    let sliderArr = [
        <ImgComp src={i5} />,
        <ImgComp src={i2} />,
        <ImgComp src={i3} />,
        <ImgComp src={i4} />,
        <ImgComp src={i5} />,
        <ImgComp src={i3} />,
        <ImgComp src={i3} />
    ];

    const [x, setX] = useState(0);
    const goLeft = () => {
        // console.log(x);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        // console.log(x);
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    };


    return (

        <div>



            <div className="slider" style={{ background: "yellow" }}>
                {sliderArr.map((item, index) => {
                    return (


                        <div key={index} className="slide" style={{ transform: `translateX(${x}%)`}}>
                            {item}


                        </div>



                    );
                })}

                <button id="goLeft" onClick={goLeft}>
                    <i class="fas fa-chevron-left"></i>
                </button>

                <button id="goRight" onClick={goRight}>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>















            <div className="slider" style={{ background: "red"}}>
                {sliderArr.map((item, index) => {
                    return (

                            <div>
                                {item}
                            </div>

                    )
                })}
            </div>

        </div>

    );
}

export default New;
