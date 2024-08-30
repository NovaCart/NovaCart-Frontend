import React from "react";
import ItemCard from "../components/ItemCard";
import AddButton from "../components/AddButton";
import AdminItemCard from "../components/AdminItemCard";

function Admin() {
  return (
    <div>
      <div className="text-center text-2xl font-bold my-4">Admin Navbar</div>
      <div className="flex flex-row ">
        <div className="w-3/4">
          <div className="flex flex-row  space-x-96">
            <div className="text-black text-5xl font-bold ms-12 ">Products</div>
            <div className="mt-2 ">
              <AddButton />
            </div>
          </div>

          <div className="mt-12 space-y-8 ms-24">
            <AdminItemCard />
            <AdminItemCard />
            <AdminItemCard />
          </div>
        </div>
        <div className="w-1/4">
          <div className="mt-12">
            <img
              src="/images/chamodi.jpg"
              alt="star"
              className="w-48 h-48 rounded-full"
            />
            <div className="text-black text-md ms-8">Chamodi vimodya</div>
            <div className="text-black text-md">chamodivimodya@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
