import React from "react";
import Slider from "react-slick";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full h-[650px]">
      <Slider {...settings}>
        <div className="relative w-full h-[650px]">
          <img
            src="/images/1.webp"
            className="w-full h-full object-cover  object-top"
            alt="Slide 1"
          />
        </div>
        <div className="relative w-full h-[650px]">
          <img
            src="/images/2.jpeg"
            className="w-full h-full object-cover  object-top"
            alt="Slide 2"
          />
        </div>
        <div className="relative w-full h-[650px]">
          <img
            src="/images/home 3.webp"
            className="w-full h-full object-cover object-top"
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
