import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Main() {
  return (
    <div>

      {/* <Hero backgroundImage="https://bell.works/home-2019/trap-bg-img-20.jpg">
        <h1>WJ Best Insulation</h1>
        <h2>Home to New Jersey's Best Insulators</h2>
      </Hero> */}

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{height:"500px"}}>
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
            <img class="d-block w-100" src="https://www.snipsmag.com/ext/resources/issues/2017/March/phenolic-ductwork/Brooklyn-Middle-School.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://images.squarespace-cdn.com/content/v1/591cae3a3e00be81dc224093/1495053738290-NZJGV0ORYQ85VX96AX2K/ke17ZwdGBToddI8pDm48kD33KhhWEodMJvcytjXFyvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXZi3p8TzzCd5LBww9rBU5Je7LlmHzK_8BCOYYXjEaPwKMshLAGzx4R3EDFOm1kBS/azteca+chiller+room+1.jpg" alt="Third slide" />
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


      <Container style={{ marginTop: 30, backgroundColor: "red" }}>
        <Col size="md-6">
          <Row>
            <Col size="md-12">
              <h1>Welcome To WJ Best Insulation!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                At WJ Best Insulation we specialize in all things insulation!
            </p>
              <p>
                Here's a view of some of our work. Click on the link to view more!
            </p>
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

        <Col size="md-6">
          images
        </Col>

      </Container>

    </div>
  );
}

export default Main;