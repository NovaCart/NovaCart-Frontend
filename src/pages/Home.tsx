import React from "react";
import ItemCard from "../components/ItemCard";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="">
      <h1 className="">Nav Bar</h1>
      <ImageCarousel />

      <div className="my-4 text-center  ">
        <p className="fs-1 font-weight-bold">Our New Arrivals</p>
      </div>
      <div className="ms-5">
        <div className="row">
          <div className="col-md-4">
            <ItemCard
              title="Item 1"
              description="This is a great item."
              imageUrl="/images/1.jpg"
              price={29.99}
            />
          </div>
          <div className="col-md-4">
            <ItemCard
              title="Item 1"
              description="This is a great item."
              imageUrl="/images/1.jpg"
              price={29.99}
            />
          </div>
          <div className="col-md-4">
            <ItemCard
              title="Item 1"
              description="This is a great item."
              imageUrl="/images/1.jpg"
              price={29.99}
            />
          </div>
          <div className="col-md-4">
            <ItemCard
              title="Item 1"
              description="This is a great item."
              imageUrl="/images/1.jpg"
              price={29.99}
            />
          </div>
          <div className="col-md-4">
            <ItemCard
              title="Item 1"
              description="This is a great item."
              imageUrl="/images/1.jpg"
              price={29.99}
            />
          </div>
          <div className="col-md-4">
            <ItemCard
              title="Item 1"
              description="This is a great item."
              imageUrl="/images/1.jpg"
              price={29.99}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
