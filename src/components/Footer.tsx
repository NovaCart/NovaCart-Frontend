import React from "react";

function Footer() {
  return (
    <div className="bg-black py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col ms-12">
            <h3 className="text-xl font-bold mb-2">Become an insider</h3>
            <p className="mb-4">Get the latest updates from NovaCart</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-black text-white border-b-2 border-white py-2 px-3 flex-grow"
              />
              <button
                type="submit"
                className="bg-transparent border border-white text-white py-2 px-4 ml-4 rounded hover:bg-white hover:text-black transition"
              >
                Sign Up
              </button>
            </form>
          </div>

          <div className="flex flex-col md:items-end mt-6 md:mt-0 ">
            <div className="flex space-x-8 mb-4 mr-4">
              <p className="cursor-pointer">How it works</p>
              <p className="cursor-pointer">Sale</p>
              <p className="cursor-pointer">Shipping</p>
              <p className="cursor-pointer">Review</p>
              <p className="cursor-pointer">Newstand</p>
            </div>
            <div className="flex space-x-8 mt-12 mr-48">
              <img src="/images/fb.png" alt="Facebook" className="w-6" />
              <img src="/images/inster.png" alt="Instagram" className="w-6" />
              <img src="/images/x.png" alt="Twitter" className="w-6" />
              <img src="/images/yt.png" alt="YouTube" className="w-6" />
              <img src="/images/apple.png" alt="Apple" className="w-6" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 ms-12">
          <p className="text-center text-sm mb-6">
            NovaCart web cares about all of our customers and strives to make
            our website, www.NovaCart.com, accessible to all visitors.
            Accordingly, we have a dedicated team that reviews and evaluates our
            website pursuant to web content accessibility guidelines 2.0, who
            are currently working with various partners to implement practicable
            features to improve the overall experience for our website visitors.
            As a result, NovaCart web is in the continuous process of enhancing
            the usability of our website to foster inclusivity and diversity.
          </p>
          <small className="block text-center text-sm">
            Copyright © 2024 NovaCart.com | Privacy Policy | Terms of Use
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
