import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>${price}</strong>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
