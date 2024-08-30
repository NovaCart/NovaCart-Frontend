import React from "react";
import { GrFormEdit } from "react-icons/gr";

interface ItemCardBoughtProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  totPrice: number;
  noofitems: number;
}

const ItemCardBought: React.FC<ItemCardBoughtProps> = ({
  title,
  description,
  imageUrl,
  price,
  totPrice,
  noofitems
}) => {
  return (
    <div className="w-1/2 mx-2 my-6 bg-white shadow-md rounded-3xl ml-8 overflow-hidden">
      <div className="max-w-s mx-2 grid grid-cols-2 gap-4">
        <div className="p-2">
          <img src={imageUrl} alt={title} className="h-48 object-cover" />
        </div>

        <div className="p-2 h-48">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-lg font-semibold">{title}</h5>
            <h4 className="text-xl font-semibold text-gray-700">Rs. {totPrice}</h4>
          </div>
          <p className="text-xl font-bold text-green-700 mb-12">Rs. {price}</p>
          <div className="flex items-center shadow-md border p-1 rounded-3xl w-1/2">
        <input type="text" value={`${noofitems} items`} readOnly className="w-1/4 border-none rounded-3xl focus:border-none focus:outline-none p-2 flex-grow"/>
        <button>
      <GrFormEdit className="text-3xl text-gray-400"/>
    </button>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardBought;
