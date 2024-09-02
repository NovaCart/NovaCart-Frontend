import React from "react";
import Button from "../Button";

interface ItemCardHistoryProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ItemCardHistory: React.FC<ItemCardHistoryProps> = ({
  title,
  description,
  imageUrl,
  price,
}) => {
  return (
    <div className="w-2/3 mx-36 my-6 bg-gray-100 shadow-md rounded-3xl overflow-hidden">
      <div className="max-w-s grid grid-cols-2">
        <img
          src={imageUrl}
          alt={title}
          className="h-36 object-cover rounded-3xl"
        />

        <div className="p-2 h-36">
          <div className="p-4">
            <div className="flex justify-between -ml-16 mb-2">
              <h5 className="text-lg font-semibold">{title}</h5>
              <h4 className="text-sm font-semibold text-gray-500">
                12-04-2023
              </h4>
            </div>
            <p className="text-xl -ml-16 font-bold">Rs.{price}</p>
            <div className="flex items-end justify-end">
              <Button text="Delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardHistory;
