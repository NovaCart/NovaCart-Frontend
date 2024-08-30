import React from "react";

function AdminItemCard() {
  return (
    <div className="ms-24 w-[590px] flex flex-row rounded-lg bg-[#E6E6E6] shadow-md ">
      <div className="w-1/4 h-36">
        <img
          src="/images/design12.jpeg"
          alt="star"
          className="h-full w-full object-cover object-top lg:rounded-l-xl "
        />
      </div>
      <div className="w-1/2 ms-4 p-4 space-y-4">
        <div className="text-black text-2xl font-bold">White shirt</div>
        <div className="text-[#06402b] text-md">price</div>
        <div className="text-[#06402b] text-md">Available</div>
      </div>
      <div className="w-1/4 mt-4">
        <button className="bg-[#06402b] text-white font-bold py-2 px-4 rounded hover:bg-[#426B1F] transition">
          Edit Details
        </button>
      </div>
    </div>
  );
}

export default AdminItemCard;
