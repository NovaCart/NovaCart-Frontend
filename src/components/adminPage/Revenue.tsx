import React from "react";
import NavBar from "./../../components/HomeNavBar";
import CircleProgress from "./../../components/Circle";

function Revenue() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row ">
        <div className="w-3/4">
          <div className="flex flex-row space-x-12">
            <div className="text-black text-5xl font-light ms-12 mt-12 ">
              Revenue
            </div>
            <div className="flex justify-center mt-12 space-x-4">
              <button className="bg-black text-white py-2 px-4 rounded">
                Last month
              </button>
              <button className="bg-white border border-black py-2 px-4 rounded">
                Last year this month
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black mt-12 ms-12 me-12"></div>
          <div className="flex flex-row items-center w-3/4 bg-white p-8 rounded-lg shadow-md ms-36 mt-8">
            <div className="w-1/2 flex justify-center">
              <CircleProgress percentage={62} />
            </div>
            <div className="w-1/2 flex flex-col space-y-4 ">
              <button className="w-3/4 bg-green-800 text-white py-2 px-4 rounded ms-12">
                <div className="flex flex-row justify-around">
                  <div className="text-white"> Women</div>
                  <div className="text-white"> 12345</div>
                </div>
              </button>
              <button className="w-3/4 bg-white border border-green-800 py-2 px-4 rounded ms-12">
                <div className="flex flex-row justify-around">
                  <div className="text-green-800"> men</div>
                  <div className="text-green-800"> 12345</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="mt-12">
            <img
              src="/images/chamodi.jpg"
              alt="star"
              className="w-48 h-48 rounded-full"
            />
            <div className="text-black text-md ms-8">Chamodi vimodya</div>
            <div className="text-black text-md">chamodivimodya@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
