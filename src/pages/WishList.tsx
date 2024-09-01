import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import ItemCardHorizontal from "../components/WishlistPage/ItemCardHorizontal";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
export default function WishList() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4">
        <h1 className="text-left font-serif text-4xl my-4 ml-24">Wishlist</h1>
        <hr className="border-gray-300 border-t-2" />
        <div className="p-2">
          <div className="ml-16">
            <ItemCardHorizontal
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
            <ItemCardHorizontal
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
            <ItemCardHorizontal
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
          </div>
          <div className="absolute top-48 right-32 p-4">
            <ContactCard
              imageUrl="/images/home 2.webp"
              name="Hasitha"
              email="hp@uom.lk"
            />
          </div>
        </div>
        <div className="mt-96">
          <Footer />
        </div>
      </div>
    </div>
  );
}
