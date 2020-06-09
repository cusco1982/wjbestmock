import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class DemoCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img src="https://japaneseprints.org/Great%20Wave%20of%20Kanagawa%20Hokusai%20Print.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://businessbrokercolorado.com/wp-content/uploads/2019/10/art.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://235bowery.s3.amazonaws.com/homecarousels/169/thumbnails/1000x400x1.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>

        );
    }
}

export default DemoCarousel;
