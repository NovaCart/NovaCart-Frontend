import React from "react";

function Footer() {
  return (
    <div className="bg-black py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Become an Insider</h3>
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
          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end items-center">
            <div className="flex flex-col items-end mb-6 md:mb-0">
              <div className="flex mb-4 space-x-4">
                <p className="cursor-pointer">How it works</p>
                <p className="cursor-pointer">Sale</p>
                <p className="cursor-pointer">Shipping</p>
                <p className="cursor-pointer">Review</p>
                <p className="cursor-pointer">Newstand</p>
              </div>
              <div className="flex space-x-4">
                <img src="/images/fb.png" alt="Facebook" className="w-5" />
                <img src="/images/inster.png" alt="Instagram" className="w-5" />
                <img src="/images/x.png" alt="Twitter" className="w-5" />
                <img src="/images/yt.png" alt="YouTube" className="w-5" />
                <img src="/images/apple.png" alt="Apple" className="w-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm">
            NovaCart web cares about all of our customers and strives to make
            our website, www.NovaCart.com, accessible to all visitors.
            Accordingly, we have a dedicated team that reviews and evaluates our
            website pursuant to web content accessibility guidelines 2.0, who
            are currently working with various partners to implement practicable
            features to improve the overall experience for our website visitors.
            As a result, NovaCart web is in the continuous process of enhancing
            the usability of our website to foster inclusivity and diversity.
          </p>
        </div>
        <div className="text-center">
          <small className="text-sm">
            Copyright © 2024 NovaCart.com | Privacy Policy | Terms of Use
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
