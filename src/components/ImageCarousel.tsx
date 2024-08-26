import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel() {
  return (
    <div>
      <Carousel>
        <CarouselItem>
          <img src="/home image.webp" alt="1" />
        </CarouselItem>
        <CarouselItem>
          <img src="/home 2.webp" alt="2" />
        </CarouselItem>
        <CarouselItem>
          <img src="/home 3.webp" alt="3" />
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
