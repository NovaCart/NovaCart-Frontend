import React, { useState } from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Gallery from "../components/BlogPage/BlogGallery";
import Modal from "../components/BlogPage/Modal";
import SizeQuantitySelector from "../components/BlogPage/SizeQtySelector";

export default function Blog() {
  const mainImage = "../images/home 2.webp";
  const thumbnails = [
    "../images/home 3.webp",
    "../images/home 3.webp",
    "../images/home 3.webp",
    "../images/home 3.webp",
  ];
  const [open, setopen] = useState(false);
  const availableSizes: string[] = ["XS", "S", "M", "L", "XL"];
  const stockBySize: { [key: string]: number } = {
    XS: 10,
    S: 15,
    M: 20,
    L: 25,
    XL: 30,
  };
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4">
        <div className="p-4">
          <div className="flex flex-col lg:flex-row mb-2">
            <h1 className="text-left font-serif text-2xl lg:text-4xl my-4 lg:ml-24">
              White neck shift dress
            </h1>
            <h5 className="text-sm text-green-800 text-xl font-semibold lg:mt-[70px] lg:font-times lg:-ms-[350px]">
              Rs. 1500
            </h5>
            <div className="flex items-end justify-between font-semibold lg:ml-[1000px] lg:mr-8 mt-4 lg:-mt-24">
              <h5>
                Denz teen -{" "}
                <span className="text-sm font-semibold text-gray-400">
                  Austrailia
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-black mt-2 me-12"></div>
        <div className="container mx-auto p-4 mt-8">
          <Gallery mainImage={mainImage} thumbnails={thumbnails} />
        </div>
        <div className="flex flex-col lg:flex-row ml-4 lg:ml-32 mt-8 lg:w-4/5">
          <div className="lg:w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos qui asperiores, consectetur officia quibusdam tempore
              cumque vero quas totam vitae incidunt ex nemo quia. Eligendi non
              ratione reiciendis magni pariatur? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Dignissimos qui asperiores,
              consectetur officia quibusdam tempore cumque vero quas totam vitae
              incidunt ex nemo quia. Eligendi non ratione reiciendis magni
              pariatur? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dignissimos qui asperiores, consectetur officia quibusdam
              tempore cumque vero quas totam vitae incidunt ex nemo quia.
              Eligendi non ratione reiciendis magni pariatur?
            </p>
            </div>
            <div className="flex lg:w-1/4 mt-8 lg:mt-4 ml-24 ">
              <div>
                <div className="flex w-16 h-16 border-2 border-black bg-white rounded-full"></div>
              </div>
              <div className="mt-4 ml-2 w-24">
                <p>Pure White</p>
              </div>
            </div>
          
        </div>
        <div className="flex flex-col lg:flex-row mt-16">
          <div className="w-full lg:w-1/2 lg:pl-36">
            <div className="">
              <h3 className="text-lg font-bold -mt-4">Specifications</h3>
              <ul className="list-disc ml-8">
                <li>S1</li>
                <li>S1</li>
                <li>S1</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-16">
            <SizeQuantitySelector
              availableSizes={availableSizes}
              stockBySize={stockBySize}
            />
            <div className="flex flex-col lg:flex-row items-center font-semibold lg:mr-16 mt-8 lg:mt-24">
              <Button />
              <div className="lg:ml-4">
                <Button text="Add to cart" onClick={() => setopen(true)} />
              </div>
              <div className="lg:ml-4">
                <Button
                  bgColor="white"
                  textColor="text-black"
                  text="Add to wishlist"
                  onClick={() => alert("Added")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
      <Modal open={open} onClose={() => setopen(false)}>
        <div className="w-1/2 h-1/2 mx-auto">hi</div>
      </Modal>
    </div>
  );
}
