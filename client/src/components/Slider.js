import React from 'react';
import "./Slider.scss";






function Slider() {


    let sliderArr = [1, 2, 3, 4, 5]



    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide">
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;