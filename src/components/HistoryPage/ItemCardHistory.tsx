import React from "react";
import Delete from "../HistoryPage/DeleteButton";

interface ItemCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ItemCardHistory: React.FC<ItemCardProps> = ({
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
            <h4 className="text-sm font-semibold text-gray-600">12-04-2023</h4>
          </div>
          <p className="text-xl font-bold mb-12">${price}</p>
          <div className="flex items-end justify-end">
          <Delete />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardHistory;
