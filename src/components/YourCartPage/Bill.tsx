import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../OrderSummary";

interface BillProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const Bill: React.FC<BillProps> = ({ subtotal, shipping, tax, total }) => {
  return (
    
    <div className="w-96 mx-auto p-10 bg-white shadow-lg rounded-3xl border border-gray-200">
          <OrderSummary subtotal={1200} shipping={1000} tax={0} total={2200} />
          <Link to='/payment'>
        <button 
          className="mt-6 w-full bg-green-700 text-white py-2 px-4 rounded-xl flex justify-center items-center hover:bg-green-800"
        >
            Continue to payment
            <span className="ml-2 text-xl">&#8594;</span>
        </button>
      </Link>
        
    </div>

  );
};

export default Bill;
