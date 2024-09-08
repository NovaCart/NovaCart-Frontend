import React from "react";
import Button from "../Button";
import { FaHeart } from 'react-icons/fa';

interface ItemCardHorizontalProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ItemCardWishlist: React.FC<ItemCardHorizontalProps> = ({
  title,
  description,
  imageUrl,
  price,
}) => {
  return (
    <div className="w-full sm:w-2/3 mx-auto sm:mx-36 my-6 bg-gray-100 shadow-md rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        
          <img src={imageUrl} alt={title} className="h-36 object-cover w-full lg:w-4/5" />
      

        <div className="p-2 h-36">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h5 className="text-lg font-semibold">{title}</h5>
            <button><FaHeart className="text-2xl text-red-500"/></button>
          </div>
          <p className="text-xl font-bold">Rs. {price}</p>
          <div className="flex items-end justify-end mt-4 sm:-mt-2">
          <Button text="Buy Now" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardWishlist;
