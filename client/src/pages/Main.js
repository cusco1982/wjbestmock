import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Main() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop:30, backgroundColor:"red" }}>
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
      </Container>
    </div>
  );
}

export default Main;