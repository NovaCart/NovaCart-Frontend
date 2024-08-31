import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import ContactCard from "../components/WishlistPage/ContactCard";
import FormInput from "../components/SettingsPage/FormInput";
import EditSaveButton from "../components/SettingsPage/Save&EditButton";

export default function Settings() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4">
        <h1 className="text-left font-serif text-4xl my-4 ml-24">Settings</h1>
        <hr className="border-gray-300 border-t-2" />
        <div className="p-2">
          <div className="w-3/6 ml-24 mt-16">
            <FormInput
              label="First Name"
              value="Hasitha"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormInput
              label="Last Name"
              value="Prasadini"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormInput
              label="Email Address"
              value="hasitha@gmail.com"
              onChange={(e) => console.log(e.target.value)}
            />
            <FormInput
              label="Password"
              value="Hasitha"
              onChange={(e) => console.log(e.target.value)}
            />
            <div>
              <EditSaveButton/>
            </div>
          </div>
          <div className="absolute top-48 right-32 p-4">
            <ContactCard
              imageUrl="/images/home 2.webp"
              name="Hasitha"
              email="hp@uom.lk"
            />
          </div>
        </div>
        <div className="mt-96">
          <Footer />
        </div>
      </div>
    </div>
  );
}
