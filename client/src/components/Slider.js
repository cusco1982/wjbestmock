import React, {useState} from 'react';
import "./Slider.scss";




function Slider() {
    let sliderArr = [1, 2, 3, 4, 5];
    const [x,setX] = useState(0)

    const goLeft = () => {
        setX(x+100)
    };
    const goRight = () => {
        setX(x-100)
    };


    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transfrom:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeft" onClick={goLeft}>left</button>
            <button id="goRight" onClick={goRight}>right</button>
        </div>
    );
}

export default Slider;