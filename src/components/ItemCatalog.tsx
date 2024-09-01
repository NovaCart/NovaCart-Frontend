import React, { useState } from "react";
import StockFilterDropdown from "./StockFilterDropdown";

export default function ItemCatalog() {
  const [selectedDress, setSelectedDress] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");

  const dressOptions = ["All", "Wedding", "Party", "Casual", "Office"];
  const colorOptions = ["All", "White", "Black", "Red", "Green"];

  return (
    <div className="sm:flex justify-between p-12 sm:space-y-0 space-y-6 pl-16 pr-8">
      <div className="md:text-3xl sm:text-xl font-semibold font-serif md:pl-28 sm:text-pl-12">
        Latest Stocks
      </div>
      <div className="flex md:space-x-24 sm:space-x-8 space-x-5">
        <StockFilterDropdown
          id="dress"
          label="Dress For"
          options={dressOptions}
          selectedValue={selectedDress}
          onChange={(e) => setSelectedDress(e.target.value)}
        />
        <StockFilterDropdown
          id="color"
          label="Color"
          options={colorOptions}
          selectedValue={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>
    </div>
  );
}
