import React, { Component } from 'react';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DemoCarousel from "./DemoCarousel.js";
import img1 from "../photos/pexels.jpeg";
import img2 from "../photos/pexels2.jpeg";
import img3 from "../photos/cranes.jpeg";


import "./Main.css";



class Main extends Component {
  render() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d;
    d = new Date();
    return (
      <div style={{ overflowX:"hidden" }}>



        {/* --------------------------------------------        --------------------------------------------        -------------------------------------------- */}

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="50000">


          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          {/* -------------------------------------------- */}


          {/* -------------------------------------------- */}
          <div class="carousel-inner">



            <div class="carousel-item active">

              <img class="d-block w-100" src={img2} alt="First slide" />


              <div class="carousel-caption d-none d-md-block" style={{ position: "absolute", left: "0", top: "0", right: "60%" }}>

                <br />
                <br />

                <h2 className="date">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {months[d.getMonth()]} {d.getFullYear()}
                </h2>

                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

                <p>
                  <a href="/projects" style={{textAlign:"center",borderRadius:"25px",border:"2px solid white",padding:"20px",width:"200px",height:"75px",marginRight:"25%"}}>
                    VIEW PROJECT
                  </a>
                </p>

                <br/> <br/> <br/> 
                
                <p>
                  <a href="/services" style={{textAlign:"center",borderRadius:"25px",border:"2px solid white",padding:"20px",width:"200px",height:"75px",marginRight:"25%"}}>
                    VIEW SERVICES
                  </a>
                </p>

              </div>

            </div>



            <div class="carousel-item" >
              <img class="d-block w-100" src={img2} alt="Second slide" />
            </div>



            <div class="carousel-item">
              <img class="d-block w-100" src={img3} alt="Third slide" />
            </div>

          </div>
          {/* -------------------------------------------- */}


          {/* -------------------------------------------- */}
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>


        </div>

        {/* --------------------------------------------        --------------------------------------------        -------------------------------------------- */}



        <Row>

          <Container style={{ marginTop: "150px", marginBottom: "20px" }}>


            <h2 style={{ textAlign: "center", marginBottom: "50px", fontSize: "50px", fontWeight: "normal" }}>
              No job too big. No job too small.
            </h2>

            <ul style={{ width: "300px", marginLeft: "auto", marginRight: "auto", fontSize: "25px" }}>
              <li>Licensed Contractor</li>

              <li>Luxury Finishing</li>

              <li>Professional Carpentry</li>

              <li>Exceptional Framing</li>

              <li>Fully Insured with Permits</li>
            </ul>

          </Container>

          <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
            <p style={{ margin: "40px", fontSize: "22px", width: "80%", marginRight: "auto", marginLeft: "auto", height: "200px" }}>
              TARGET NY CONSTRUCTION WAS FOUNDED IN 2002 WITH THE PHILOSOPHY OF DELIVERING TOP QUALITY, TRUSTED PERFORMANCE, ECONOMY FOR THE CLIENT, SAFETY, ABILITY TO DELIVER EVERY PROJECT, LARGE OR SMALL, IN A TIMELY MANNER AND HIGH BUSINESS ETHICS. OUR COMMITMENT TO EXCELLENCE HAS GAINED US A REPUTATION, IN A HIGHLY COMPETITIVE MARKET OF SUPERIOR WORKMANSHIP CHARACTERIZED BY ITS CREW OF HONEST, HARDWORKING, HIGHLY SKILLED PROFESSIONALS.
            </p>

            <hr style={{
              color: "rgba(31,37,38,.15)",
              backgroundColor: "rgba(31,37,38,.15)",
              height: "2px",
              marginTop: "32px",
              marginBottom: "32px",
              borderWidth: 0,
              borderStyle: "none",
              boxSizing: "content-box"
            }} />

          </div>


        </Row>




        {/* --------------------------------------------        --------------------------------------------        -------------------------------------------- */}



        <div id="carouselExample" class="carousel slide" data-ride="carousel" style={{ backgroundColor: "orange", padding: "60px", height: "600px" }}>
          <ol class="carousel-indicators">
            <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExample" data-slide-to="1"></li>
            <li data-target="#carouselExample" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="d-block w-100" src="https://www.constructionandstone.com/wp-content/uploads/2017/05/Clifton-5-1100x733.jpg" alt="Third slide" />
            </div>
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://www.constructionandstone.com/wp-content/uploads/2017/05/Clifton-6-1100x733.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://www.constructionandstone.com/wp-content/uploads/2017/05/Clifton-5-1100x733.jpg" alt="Second slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>







        {/* --------------------------------------------        --------------------------------------------        -------------------------------------------- */}






        <Row>
          <Container style={{ marginTop: 30, backgroundColor: "green" }}>

            <Col size="md-6">

              <Row>
                <Col size="md-12">
                  <h1>Welcome To WJ Best Insulation!</h1>
                </Col>
              </Row>



              <Row>
                <Col size="md-12">

                  <p>At WJ Best Insulation we specialize in all things insulation!</p>

                  <p>Here's a view of some of our work. Click on the link to view more!</p>

                  <p>
                    Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
                    tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
                    sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
                    Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
                    congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
                    vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
                    nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
                    Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
                    libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
                    eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
                    interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
                    massa.
                </p>
                </Col>
              </Row>



            </Col>

          </Container>
        </Row>




      </div>

    );
  }
}


export default Main;
