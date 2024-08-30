import React from "react";
import EditItem from "./EditItems";

interface ItemCardBoughtProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ItemCardBought: React.FC<ItemCardBoughtProps> = ({
  title,
  description,
  imageUrl,
  price,
}) => {
  return (
    <div className="w-1/2 mx-2 my-6 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="max-w-s mx-2 grid grid-cols-2 gap-4">
        <div className="p-2">
          <img src={imageUrl} alt={title} className="h-48 object-cover" />
        </div>

        <div className="p-2 h-48">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-lg font-semibold">{title}</h5>
            <h4 className="text-xl font-semibold text-gray-700">Rs. 1500</h4>
          </div>
          <p className="text-xl font-bold text-green-700 mb-12">${price}</p>
          <EditItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardBought;
