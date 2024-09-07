import React, { useState } from "react";
import NavBar from "./../../components/HomeNavBar";
import CircleProgress from "./../../components/Circle";

interface Data {
  percentage: number;
  women: number;
  men: number;
}

function Revenue() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "lastMonth" | "lastYearThisMonth"
  >("lastMonth");

  const data: { [key in "lastMonth" | "lastYearThisMonth"]: Data } = {
    lastMonth: {
      percentage: 62,
      women: 12345,
      men: 54321,
    },
    lastYearThisMonth: {
      percentage: 75,
      women: 9876,
      men: 6789,
    },
  };

  const handlePeriodChange = (period: "lastMonth" | "lastYearThisMonth") => {
    setSelectedPeriod(period);
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-row">
        <div className="w-3/4">
          <div className="flex flex-row space-x-12">
            <div className="text-black text-5xl font-light ms-12 mt-12">
              Revenue
            </div>
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={() => handlePeriodChange("lastMonth")}
                className={`py-2 px-4 rounded ${
                  selectedPeriod === "lastMonth"
                    ? "bg-black text-white"
                    : "bg-white border border-black"
                }`}
              >
                Last month
              </button>
              <button
                onClick={() => handlePeriodChange("lastYearThisMonth")}
                className={`py-2 px-4 rounded ${
                  selectedPeriod === "lastYearThisMonth"
                    ? "bg-black text-white"
                    : "bg-white border border-black"
                }`}
              >
                Last year this month
              </button>
            </div>
          </div>
          <div className="border-b-2 border-black mt-12 ms-12 me-12"></div>
          <div className="flex flex-row items-center w-3/4 bg-white p-8 rounded-lg shadow-md ms-36 mt-8">
            <div className="w-1/2 flex justify-center">
              <CircleProgress percentage={data[selectedPeriod].percentage} />
            </div>
            <div className="w-1/2 flex flex-col space-y-4">
              <button className="w-3/4 bg-gray-800 text-white py-2 px-4 rounded ms-12">
                <div className="flex flex-row justify-around">
                  <div className="text-white">Women</div>
                  <div className="text-white">{data[selectedPeriod].women}</div>
                </div>
              </button>
              <button className="w-3/4 bg-white border border-gray-800 py-2 px-4 rounded ms-12">
                <div className="flex flex-row justify-around">
                  <div className="text-gray-800">Men</div>
                  <div className="text-gray-800">
                    {data[selectedPeriod].men}
                  </div>
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
