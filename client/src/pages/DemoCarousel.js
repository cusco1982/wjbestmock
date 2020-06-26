import React, { Component } from 'react';
// import ReactDOM from 'react-dom'; 
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


class DemoCarousel extends Component {
    render() {
        return (
            <div>


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


                {/* <Carousel>
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
                </Carousel> */}

                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



            </div>

        );
    }
}
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


export default DemoCarousel;
