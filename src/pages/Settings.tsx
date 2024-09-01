import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import FormInput from "../components/SettingsPage/FormInput";
import Button from "../components/Button";

export default function Settings() {
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4 flex flex-row">
        <div className="w-3/4">
          <h1 className="text-left font-serif text-4xl my-8 ml-36">Settings</h1>
          <div className="border-b-2 border-black mt-12 ms-12 me-12"></div>
          <div className="p-2">
            <div className="w-2/3 ml-36 mt-8">
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
              <div className="ml-[650px]">
                <Button text="Edit" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <ContactCard
            imageUrl="/images/home 2.webp"
            name="Hasitha"
            email="hp@uom.lk"
          />
        </div>
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
