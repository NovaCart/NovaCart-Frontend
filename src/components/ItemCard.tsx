import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="card" style={{ maxWidth: "300px", margin: "20px" }}>
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title">{title}</h5>
          <img src="/images/react.png" alt="star" style={{ width: "20px" }} />
        </div>
        <p className="card-text">
          <strong>${price}</strong>
        </p>
        <BuyNowButton />
      </div>
    </div>
  );
};

export default ItemCard;
