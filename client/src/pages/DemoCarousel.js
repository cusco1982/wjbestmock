import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Container from "../components/Container"


class DemoCarousel extends Component {
    render() {
        return (
            <div>
                <Container>

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="https://i.pinimg.com/originals/c6/04/b4/c604b48cf7f3e150cb5fe7215481bb13.jpg" alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://i.pinimg.com/originals/c6/04/b4/c604b48cf7f3e150cb5fe7215481bb13.jpg" alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://i.pinimg.com/originals/c6/04/b4/c604b48cf7f3e150cb5fe7215481bb13.jpg" alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </Container>
            </div>

        );
    }
}
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default DemoCarousel;
