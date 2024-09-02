import React from "react";

const StockFilterDropdown: React.FC<{ 
    id: string; 
    label: string; 
    selectedValue: string; 
    options: string[]; 
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
 }> = ({ id, label, selectedValue,options, onChange }) => (
    <div className="flex flex-row rounded h-10 overflow-hidden border border-gray-200">
        <label 
            htmlFor={id}
            className="text-sm text-center  bg-black font-medium text-gray-100 p-2 md:w-28 w-20"
        >
            {label}
        </label>
        <select 
         id={id}
         className="block bg-white border border-gray-50 focus:border-gray-600 focus:border-2 sm:text-sm md:w-28 w-20"
         value={selectedValue}
         onChange={onChange}
         >
            {options.map(option => (
                <option key={option} value={option} className="text-center">
                    {option}
                </option>
            ))}
         </select>
    </div>
);

export default StockFilterDropdown;
