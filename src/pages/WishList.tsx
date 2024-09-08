import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import ItemCardWishlist from "../components/WishlistPage/ItemCardWishlist";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
export default function WishList() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4">
        <h1 className="text-left font-serif text-3xl lg:text-4xl my-8 lg:ml-36">Wishlist</h1>
        <div className="border-b-2 border-black mt-4 lg:mt-12 mx-4 lg:ms-12 lg:me-12"></div>
        <div className="p-2">
          <div className="ml-4 lg:ml-16">
            <ItemCardWishlist
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
            <ItemCardWishlist
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
            <ItemCardWishlist
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
          </div>
          </div>
          </div>
          <div className="w-full lg:w-1/4 lg:mt-0">
            <ContactCard
              imageUrl="/images/home 2.webp"
              name="Hasitha Prasadini"
              email="hasithaprasadini@uom.lk"
            />
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
  );
}
