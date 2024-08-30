import React from "react";

interface BillProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const Bill: React.FC<BillProps> = ({ subtotal, shipping, tax, total }) => {
  return (
    
      <div className="w-96 mx-auto p-10 bg-white shadow-lg rounded-3xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Order summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span>RS. {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span>RS. {shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tax</span>
          <span>{tax > 0 ? `RS. ${tax.toFixed(2)}` : '-'}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>RS. {total.toFixed(2)}</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-green-700 text-white py-2 px-4 rounded-xl flex justify-center items-center hover:bg-green-800">
        Continue to payment
        <span className="ml-2 text-xl">&#8594;</span>
      </button>
    </div>

  );
};

export default Bill;
