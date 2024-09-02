import React, { useState, useEffect } from 'react';

interface SizeQuantitySelectorProps {
  availableSizes: string[];
  stockBySize: { [key: string]: number };
}

const SizeQuantitySelector: React.FC<SizeQuantitySelectorProps> = ({ availableSizes, stockBySize }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(availableSizes[0] || null);
  const [quantity, setQuantity] = useState<number>(1);
  const [maxStock, setMaxStock] = useState<number>(stockBySize[selectedSize!] || 1);

  useEffect(() => {
    if (selectedSize) {
      setMaxStock(stockBySize[selectedSize]);
      setQuantity(1);
    }
  }, [selectedSize, stockBySize]);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, maxStock));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Size</span>
        <div className="flex space-x-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeClick(size)}
              className={`px-3 py-1 border rounded-full ${
                selectedSize === size ? 'bg-green-700 text-white' : 'bg-white text-black border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="font-semibold">Quantity</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={decrementQuantity}
            className="px-3 py-1 border rounded-full border-gray-300 bg-white text-black"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="px-3 py-1 border rounded-full border-gray-300 bg-white text-black"
            disabled={quantity >= maxStock}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeQuantitySelector;
