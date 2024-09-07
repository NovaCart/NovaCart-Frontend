import React from "react";
import BuyNowButton from "./BuyNowButton";

interface ItemCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  imageUrl,
  price,
}) => {
  return (
    <div className="max-w-xs mx-4 my-6 bg-white shadow-md rounded overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h5 className="text-lg font-semibold">{title}</h5>
          <img src="/images/react.png" alt="star" className="w-5" />
        </div>
        <p className="text-xl font-bold mb-4">${price}</p>
        <BuyNowButton />
      </div>
    </div>
  );
};

export default ItemCard;
