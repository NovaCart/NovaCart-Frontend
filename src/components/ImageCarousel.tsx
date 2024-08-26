import React from "react";
import Carousel from "react-bootstrap/Carousel";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ width: "100%", height: "650px" }}>
        <img
          src="/images/1.webp"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ width: "100%", height: "650px" }}>
        <img
          src="/images/2.jpeg"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ width: "100%", height: "650px" }}>
        <img
          src="/images/home 3.webp"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
