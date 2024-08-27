import React from "react";
import ItemCard from "../components/ItemCard";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="mx-auto px-4">
      <h1 className="text-center text-2xl font-bold my-4">Nav Bar</h1>
      <Carousel />

      <div className="mt-8 text-center">
        <p className="text-4xl font-bold">Our New Arrivals</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <div>
          <ItemCard
            title="White shirt "
            imageUrl="/images/1.jpg"
            price={29.99}
            description={" "}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/1.jpg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/1.jpg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/1.jpg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/1.jpg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/1.jpg"
            price={29.99}
            description={""}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
