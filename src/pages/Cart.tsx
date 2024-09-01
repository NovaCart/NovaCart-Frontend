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
          <div className="flex items-center">
            <h1 className="text-left font-serif text-4xl my-4 ml-36">
              Your Cart
            </h1>
            <h5 className="absolute text-sm font-semibold text-gray-400 ml-[350px] mt-4">
              3 items
            </h5>
          </div>
        </div>
        <div className="border-b-2 border-black mt-4 ms-12 me-12"></div>
        <div className="p-2 mt-2 flex flex-row">
          <div className="ml-8 w-3/5">
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
            <ItemCardBought
              title="White shirt "
              imageUrl="/images/1.jpg"
              price={1000}
              description={" "}
              totPrice={2000}
              noofitems={2}
            />
          </div>
          <div className="p-4 w-2/5 me-8">
            <Bill subtotal={1200} shipping={1000} tax={0} total={2200} />
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
