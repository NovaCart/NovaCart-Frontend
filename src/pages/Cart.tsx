import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import Bill from "../components/YourCartPage/Bill";
import ItemCardBought from "../components/YourCartPage/BoughtItemCard";

export default function Cart() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4">
        <div className="p-4">
          <div className="flex items-center mb-2">
            <h1 className="text-left font-serif text-4xl my-4 ml-24">
              Your Cart
            </h1>
            <h5 className="absolute text-sm font-semibold text-gray-400 ml-72 mt-4">
              3 items
            </h5>
          </div>
        </div>
        <hr className="border-gray-300 border-t-2" />
        <div className="p-2">
          <div className="ml-16">
            <ItemCardBought
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={1000}
              description={" "}
              totPrice={1000}
              noofitems={1}
            />
            <ItemCardBought
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={1000}
              description={" "}
              totPrice={2000}
              noofitems={2}
            />
          </div>
          <div className="absolute top-60 right-32 p-4">
            <Bill subtotal={1200} shipping={1000} tax={0} total={2200} />
          </div>
        </div>
        <div className="mt-96">
          <Footer />
        </div>
      </div>
    </div>
  );
}
