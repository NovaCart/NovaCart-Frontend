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
    <div className="w-full sm:w-2/3 mx-4 sm:mx-36 my-6 bg-gray-100 shadow-md rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full lg:-ml-16 ml-0 h-36 object-cover rounded"
        />

        <div className="p-2 h-36">
          <div className="p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-2">
              <h5 className="text-lg font-semibold">{title}</h5>
              <h4 className="text-sm font-semibold text-gray-500 mt-2 sm:mt-0">
                12-04-2023
              </h4>
            </div>
            <p className="text-xl font-bold">Rs.{price}</p>
            <div className="flex items-end justify-end lg:mt-0 -mt-8">
              <Button text="Delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardHistory;
