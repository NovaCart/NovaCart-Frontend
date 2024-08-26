import React from "react";
import ItemCard from "../components/ItemCard";
import ImageCarousel from "../components/ImageCarousel";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 className="">Nav Bar</h1>
      <ImageCarousel />
      <div className="row">
        <div className="col-md-4">
          <ItemCard
            title="Item 1"
            description="This is a great item."
            imageUrl="https://via.placeholder.com/300"
            price={29.99}
          />
        </div>
        <div className="col-md-4">
          <ItemCard
            title="Item 2"
            description="Another amazing item."
            imageUrl="https://via.placeholder.com/300"
            price={49.99}
          />
        </div>
        {/* Add more ItemCards as needed */}
      </div>
    </div>
  );
};

export default Home;
