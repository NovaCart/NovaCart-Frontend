import React from "react";

function AdminUserCard() {
  return (
    <div className="ms-24 w-[820px] flex flex-row rounded-lg bg-[#E6E6E6] shadow-md ">
      <div className="w-1/6 h-36">
        <img
          src="/images/design12.jpeg"
          alt="star"
          className="h-full w-full object-cover object-top lg:rounded-l-xl "
        />
      </div>
      <div className="w-1/3 ms-4 p-4 space-y-4">
        <div className="text-black text-2xl font-bold">Chamodi Vimodya</div>
        <div className="text-[#06402b] text-md">chamodivimodya@gmail.com</div>
      </div>
      <div className="w-1/2 mt-4 flex flex-row space-x-8 ">
        <div className="w-1/2">
          <div className="flex flex-col justify-around space-y-4 ">
            <button className="bg-black text-white font-bold py-2 px-1 rounded hover:bg-gray-500 transition">
              Details
            </button>
            <button className="bg-black text-white font-bold py-2 px-1 rounded hover:bg-gray-500 transition">
              Make VIP
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col  space-y-4 mr-4">
            <button className="bg-[#6B1F1F] text-white font-bold py-2 px-1 rounded hover:bg-red-400 transition">
              Blacklist
            </button>
            <button className="bg-[#426B1F] text-white font-bold py-2 px-1 rounded hover:bg-green-400 transition">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUserCard;
