import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import ItemCardWishlist from "../components/WishlistPage/ItemCardWishlist";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
export default function WishList() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4 flex flex-row">
        <div className="w-3/4">
        <h1 className="text-left font-serif text-4xl my-8 ml-36">Wishlist</h1>
        <div className="border-b-2 border-black mt-12 ms-12 me-12"></div>
        <div className="p-2">
          <div className="ml-16">
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
          <div className="w-1/4">
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
