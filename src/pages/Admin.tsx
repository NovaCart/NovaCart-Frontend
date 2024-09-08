import React from "react";
import ItemCard from "../components/ItemCard";
import AddButton from "../components/AddButton";
import AdminItemCard from "../components/adminPage/AdminItemCard";
import HomeNavBar from "../components/HomeNavBar";

function Admin() {
  return (
    <div>
      <HomeNavBar />
      <div className="flex flex-row ">
        <div className="w-3/4">
          <div className="flex flex-row  space-x-96">
            <div className="text-black text-5xl font-light ms-12 mt-12">
              Products
            </div>
            <div className="mt-16 ">
              <AddButton />
            </div>
          </div>
          <div className="border-b-2 border-black mt-12 ms-12 me-12"></div>
          <div className="mt-16 flex flex-wrap gap-y-8">
            <AdminItemCard />
            <AdminItemCard />
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
