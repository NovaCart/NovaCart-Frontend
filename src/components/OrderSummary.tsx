import React from "react";
import { Link } from "react-router-dom";

interface BillProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<BillProps> = ({ subtotal, shipping, tax, total }) => {
  return (
    <div className="text-gray-800">
      <h2 className="text-xl font-semibold mb-4">Order summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>RS. {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>RS. {shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>{tax > 0 ? `RS. ${tax.toFixed(2)}` : '-'}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>RS. {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
