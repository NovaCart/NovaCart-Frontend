import React from "react";
import { GrFormEdit } from "react-icons/gr";


function EditItem() {
  return (
    <div className="flex items-center shadow-md border p-1 rounded-3xl w-1/2">
        <input type="text" placeholder="1 item" className="w-1/4 border-none rounded-3xl focus:border-none focus:outline-none p-2 flex-grow"/>
        <button>
      <GrFormEdit className="text-3xl text-gray-400"/>
    </button>
    </div>
    
  );
}

export default EditItem;
