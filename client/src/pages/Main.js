import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";




function Main() {
  return (
    <div>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ height: "610px" }}>
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://bell.works/home-2019/trap-bg-img-20.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://www.easterninsulation.com/wp-content/uploads/2016/04/BASF-1.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://www.easterninsulation.com/wp-content/uploads/2016/04/blueprintslider1.jpg" alt="Third slide" />
          </div>
        </div>
        {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> */}
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


      <Row style={{ backgroundColor: "orange", padding: "20px", height: "30vh" }}>


        <Col size="md-6">
          <div style={{ fontSize: "30px" }}>
            Check out some of our previous projects!
        </div>
        </Col>

        <Col size="md-6">

          <a href="/projects">hello</a>
          
        </Col>

      




      </Row>


      {/* --------------------------------------------        --------------------------------------------        -------------------------------------------- */}





      <Row style={{ height: "500px", backgroundColor: "grey", marginTop: "40px" }}>

        <Col size="md-6" style={{ color: "white" }}>
          Have a look at some of our previous work!
        </Col>

        <Col size="md-6">
          <div>
            <a href="/projects">
              <button type="button" class="btn btn-primary">Gallery</button>

            </a>
          </div>

        </Col>


      </Row>


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

export default Main;