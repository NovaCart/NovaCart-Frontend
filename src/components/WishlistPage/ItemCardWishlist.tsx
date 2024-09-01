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
    <div className="w-2/3 mx-36 my-6 bg-gray-100 shadow-md rounded-3xl overflow-hidden">
      <div className="max-w-s grid grid-cols-2">
        
          <img src={imageUrl} alt={title} className="h-36 object-cover" />
      

        <div className="p-2 h-36">
        <div className="p-4">
          <div className="flex items-center justify-between -ml-16 mb-2">
            <h5 className="text-lg font-semibold">{title}</h5>
            <button><FaHeart className="text-2xl text-red-500"/></button>
          </div>
          <p className="text-xl -ml-16 font-bold">Rs. {price}</p>
          <div className="flex items-end justify-end">
          <Button text="Buy Now" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCardWishlist;
