import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import ContactCard from "../components/WishlistPage/ContactCard";
import Footer from "../components/Footer";
import ItemCardHistory from "../components/HistoryPage/ItemCardHistory";
export default function History() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4">
        <h1 className="text-left font-serif text-4xl my-4 ml-24">Bought History</h1>
        <hr className="border-gray-300 border-t-2" />
        <div className="p-2">
          <div className="ml-16">
          <ItemCardHistory
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={29.99}
              description={" "}
            />
            <ItemCardHistory
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
