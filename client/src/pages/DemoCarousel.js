import React, { Component } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";



class DemoCarousel extends Component {
    render() {
        return (

                <Row style={{paddingTop:"150px"}}>
                    <Container>

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators" style={{backgroundColor:"red"}}>



                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

                                {/* <img class="d-block w-100" src="https://i.pinimg.com/originals/c6/04/b4/c604b48cf7f3e150cb5fe7215481bb13.jpg" alt="First slide" /> */}




                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="https://i.pinimg.com/originals/c6/04/b4/c604b48cf7f3e150cb5fe7215481bb13.jpg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/61iqzUF0dzL._AC_SX522_.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://images-na.ssl-images-amazon.com/images/I/61iqzUF0dzL._AC_SX522_.jpg" alt="Third slide" />
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
                </Row>


        );
    }
}


export default DemoCarousel;
