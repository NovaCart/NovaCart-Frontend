import React, { useState } from "react";
import Revenue from "../components/adminPage/Revenue";
import FeedBack from "../components/adminPage/FeedBack";

const ReviewPage = () => {
  const [activeTab, setActiveTab] = useState("revenue");

  return (
    <div className="flex flex-col">
      <div className="">
        {activeTab === "revenue" && (
          <div>
            <Revenue />
          </div>
        )}
        {activeTab === "feedback" && (
          <div>
            <FeedBack />
          </div>
        )}
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-4 mt-4 justify-center">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "revenue"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("revenue")}
        >
          Revenue
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "feedback"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("feedback")}
        >
          Feedback
        </button>
      </div>

      {/* Tab Content */}
    </div>
  );
};

export default ReviewPage;
