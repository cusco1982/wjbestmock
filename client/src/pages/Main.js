import React, { Component } from 'react';
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DemoCarousel from "./DemoCarousel.js";
import img1 from "../photos/pexels.jpeg";
import img2 from "../photos/pexels2.jpeg";
import img3 from "../photos/cranes.jpeg";



import insulationmask from "../photos/insulationmask.png"
import safety from "../photos/safety.png"
import truck from "../photos/truck.png"
import insulation from "../photos/insulation.png"
import consulting from "../photos/consulting.png"


import "./Main.css";



class Main extends Component {
  render() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d;
    d = new Date();
    return (
      <div style={{ overflowX: "hidden" }}>




        <div style={{ height: "9vh", background: "black" }}>

          <li style={{ color: "white", textAlign: "center", listStyle: "none", fontSize: "25px", paddingTop: "1%" }}>

            <ul style={{ display: "inline-block", width: "20%", paddingTop: "12px" }}>
              <a href="/services">SERVICES</a>
            </ul>

            <ul style={{ display: "inline-block", width: "20%" }}>
              <a href="/projects">OUR WORK</a>
            </ul>

            <ul style={{ display: "inline-block", width: "20%" }}>
            <a href="/projects2">projects2</a>  
            </ul>

            <ul style={{ display: "inline-block", width: "20%" }}>
            <a href="/contact">CONTACT US</a>  
            </ul>
          </li>

        </div>



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

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

                <p>
                  <a href="/projects" style={{ textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
                    VIEW PROJECT
                  </a>
                </p>

                <br /> <br /> <br />

                <p>
                  <a href="/services" style={{ textAlign: "center", borderRadius: "25px", border: "2px solid white", padding: "20px", width: "200px", height: "75px", marginRight: "25%" }}>
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

        {/* --------------------------------------------   free quote     --------------------------------------------        -------------------------------------------- */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="contact" style={{ background: "white", color: "black" }}>

          <div style={{ fontSize: "300%", textAlign: "center" }}>


            <div>
              Need a FREE quote? Click here!
            </div>


            <a href="contact">

              <button type="button" class="btn btn-light" style={{ fontSize: "70%", borderColor: "black" }}>FREE QUOTE</button>

            </a>



          </div>

        </div>



        <br />
        <br />
        <br />


        <br />
        <br />
        <br />
        <br />





        {/* ------------------------------------------------  SERVICES IMAGE GRID  ---------------------------------------------------------------------------------------------- */}
        <div style={{ background: "#191a1c" }}>

          <div style={{ background: "#191a1c", height: "8vh" }}></div>

          <div style={{ height: "15vh", color: "whitesmoke", justifyContent: "center", display: "flex" }}>
            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={insulationmask} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Abatement</h2>
                <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                  Asbestos, lead, and mold abatement and remediation services.
      </p>
              </div>
            </div>

            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={insulation} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Construction</h2>
                <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                  Asbestos, lead, and mold abatement and remediation services.
      </p>
              </div>
            </div>

            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={consulting} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Insulation</h2>
                <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                  Asbestos, lead, and mold abatement and remediation services.
      </p>
              </div>
            </div>
          </div>

          <div style={{ background: "#191a1c", height: "2vh" }}></div>
          {/* -----------------------------------------------------------------VVV  2ND ROW  VVV------------------------------------------------------------------------------------- */}

          <div style={{ height: "15vh", color: "whitesmoke", justifyContent: "center", display: "flex" }}>

            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={safety} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Demolition</h2>
                <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                  Asbestos, lead, and mold abatement and remediation services.
    </p>
              </div>
            </div>
            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={truck} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Carting</h2>
                <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                  Asbestos, lead, and mold abatement and remediation services.
    </p>
              </div>
            </div>
            <div style={{ display: "inline-block", width: "25%", height: "100%", background: "#191a1c" }}>
              <img style={{ width: "20%", display: "inline-block" }} src={insulationmask} />
              <div style={{ width: "80%", display: "inline-block", paddingTop: "3%" }}>
                <h2 style={{ paddingLeft: "10px" }}>Consulting</h2>
                <p style={{ width: "80%", fontSize: "125%", paddingTop: "10px" }}>
                  Asbestos, lead, and mold abatement and remediation services.
    </p>
              </div>
            </div>

          </div>

          <div style={{ background: "#191a1c", height: "8vh" }}></div>

        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <br />
        <br />
        <br />
        <br />


        {/* --------------------------------------------        --------------------------------------------        -------------------------------------------- */}




        <div id="carouselExample" class="carousel slide" data-ride="carousel" style={{ backgroundColor: "orange", padding: "60px", height: "400px" }}>
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


        {/* 
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
        </div> */}







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
