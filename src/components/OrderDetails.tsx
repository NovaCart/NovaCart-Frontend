import React from 'react'

interface OrderProps {
    title: string;
    size: string;
    imageUrl: string;
    price: string;
    color: string;
    qty: number;
}
const OrderDetails: React.FC<OrderProps> = ({title,size,imageUrl,price,color,qty}) => {
    return(
    <div className="flex items-center p-4 m-4">
      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-md ">
        <img
          src={imageUrl}
          alt="orderImage"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="ml-4 flex flex-col justify-center">
        <h2 className="font-semibold text-lg text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">
          {size} | {color} | Qty: {qty}
        </p>
        <p className="font-bold text-green-600">LKR {price}</p>
      </div>
    </div>
    )
}
export default OrderDetails;