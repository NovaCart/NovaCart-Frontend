import React, { useState } from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import FormInput from "../components/SettingsPage/FormInput";
import Button from "../components/Button";

export default function Settings() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4 flex flex-row">
        <div className="w-3/4">
          <h1 className="text-left font-serif text-4xl my-8 ml-36">Settings</h1>
          <div className="border-b-2 border-black mt-12 ms-12 me-12"></div>
          <form>
            <div className="p-2">
              <div className="w-2/3 ml-36 mt-8">
                <FormInput
                  type="text"
                  label="First Name"
                  value="Hasitha"
                  readonly={true}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormInput
                  type="text"
                  label="Last Name"
                  value="Prasadini"
                  readonly={true}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormInput
                  type="text"
                  label="Email Address"
                  value="hasitha@gmail.com"
                  readonly={true}
                  onChange={(e) => console.log(e.target.value)}
                />
                <FormInput
                  type="text"
                  label="Password"
                  value="Hasitha"
                  readonly={true}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className=" ml-36 w-2/3">
                <div className="flex items-center">
                  <input
                    id="shipping-checkbox"
                    type="checkbox"
                    className="mr-2"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="shipping-checkbox" className="text-lg">
                    Update Advanced Details
                  </label>
                </div>

                {isChecked && (
                  <div className="mt-8">
                      <FormInput
                        type="text"
                        label="Country"
                        value="Sri Lanka"
                        onChange={(e) => console.log(e.target.value)}
                        />
                        <FormInput
                        type="number"
                        label="Contact No"
                        value="0760828945"
                        onChange={(e) => console.log(e.target.value)}
                        />
                        <FormInput
                        type="text"
                        label="Address"
                        value="Wasana, Akuressa"
                        onChange={(e) => console.log(e.target.value)}
                        />
                        <FormInput
                        type="text"
                        label="City"
                        value="Matara"
                        onChange={(e) => console.log(e.target.value)}
                        />
                        <FormInput
                        type="number"
                        label="Postal Code"
                        value="81056"
                        onChange={(e) => console.log(e.target.value)}
                        />
                  </div>
                )}
                <div className="ml-[650px]">
                  <Button text="Edit" />
                </div>
              </div>
            </div>
          </form>
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