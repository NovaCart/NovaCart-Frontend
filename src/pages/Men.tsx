import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ItemCard from "../components/ItemCard";
import ItemCatalog from "../components/ItemCatalog";

export default function Men() {
  return (
    <div>
      <HomeNavBar />
      <Carousel />
      <div>
        <ItemCatalog />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <ItemCard
            title="White shirt "
            imageUrl="/images/men.jpeg"
            price={29.99}
            description={" "}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/men.jpeg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/men.jpeg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/men.jpeg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/men.jpeg"
            price={29.99}
            description={""}
          />
        </div>
        <div>
          <ItemCard
            title="Item 1"
            imageUrl="/images/men.jpeg"
            price={29.99}
            description={""}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
