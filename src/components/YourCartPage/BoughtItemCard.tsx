import React from "react";
import { GrFormEdit } from "react-icons/gr";
import Button from "../Button";

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
  noofitems,
}) => {
  return (
    <div className="mx-4 lg:mx-24 my-6 bg-gray-100 shadow-md rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <img src={imageUrl} alt={title} className="w-full lg:w-3/4 h-36 object-cover" />

        <div className="p-2 h-auto lg:h-36">
          <div className="p-4">
            <div className="flex flex-col lg:flex-row justify-between lg:-ml-16 mb-2">
              <h5 className="text-lg font-semibold">{title}</h5>
              <h4 className="text-xl font-semibold text-gray-700 mt-2 lg:mt-0">
                Rs. {totPrice}
              </h4>
            </div>
            <p className="text-lg lg:text-xl font-bold text-green-700 lg:-ml-16 mb-4 lg:mb-12">
              Rs. {price}
            </p>
            <div className="flex flex-col lg:flex-row items-end justify-end lg:-mt-12">
              <div className="flex items-center bg-white border p-1 rounded-2xl w-1/3 lg:w-2/5 mt-4 lg:mt-0">
                <input
                  type="text"
                  value={`${noofitems} items`}
                  readOnly
                  className="w-2/3 border-none rounded-3xl focus:border-none focus:outline-none p-1 flex-grow"
                />
                <button>
                  <GrFormEdit className="text-2xl lg:text-3xl text-gray-400" />
                </button>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-2 flex items-end justify-end w-full lg:w-auto">
                <Button text="Delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardBought;
