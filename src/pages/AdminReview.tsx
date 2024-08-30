import React from "react";
import NavBar from "../components/HomeNavBar";
import CircleProgress from "../components/Circle";

function ReviewPage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between mt-8 px-8">
        {/* Left Section - Revenue */}
        <div className="flex flex-col items-center w-3/4 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Revenue</h2>
          <CircleProgress percentage={75} />
        </div>

        {/* Right Section - Profile */}
        <div className="flex flex-col items-center w-1/4">
          <img
            src="/path-to-profile-image.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full mb-4"
          />
          <div className="text-center">
            <h3 className="text-xl font-bold">Chamodi Liyanage</h3>
            <p>chamodivimodya@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mt-8 space-x-4">
        <button className="bg-black text-white py-2 px-4 rounded">
          Last month
        </button>
        <button className="bg-white border border-black py-2 px-4 rounded">
          Last year this month
        </button>
      </div>
    </div>
  );
}

export default ReviewPage;
