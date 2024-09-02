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
          <div className="flex items-center mb-2">
            <h1 className="text-left font-serif text-4xl my-4 ml-24">
              White neck shift dress
            </h1>
            <h5 className="absolute text-sm text-green-800 text-xl font-semibold mt-[70px] font-times ms-24">
              Rs. 1500
            </h5>
            <div className="flex items-end justify-between font-semibold ml-[600px] mr-16">
              <h5>
                Denz teen -{" "}
                <span className="text-sm font-semibold text-gray-400">
                  Austrailia
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-black mt-2 ms-12 me-12"></div>
        <div className="container mx-auto p-4 mt-8">
          <Gallery mainImage={mainImage} thumbnails={thumbnails} />
        </div>
        <div className="flex ml-32 mt-8 w-4/5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          qui asperiores, consectetur officia quibusdam tempore cumque vero quas
          totam vitae incidunt ex nemo quia. Eligendi non ratione reiciendis
          magni pariatur? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dignissimos qui asperiores, consectetur officia quibusdam
          tempore cumque vero quas totam vitae incidunt ex nemo quia. Eligendi
          non ratione reiciendis magni pariatur? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dignissimos qui asperiores, consectetur
          officia quibusdam tempore cumque vero quas totam vitae incidunt ex
          nemo quia. Eligendi non ratione reiciendis magni pariatur?
          <div className="flex mt-8 ml-16 justify-end">
            <div>
              <div className="flex w-16 h-16 border-2 border-black bg-white rounded-full"></div>
            </div>
            <div className="mt-4 ml-2 w-24">
              <p>Pure White</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-24">
          <div className="w-1/2">
          <div className="ms-36">
          <h3 className="text-lg font-bold">Specifications</h3>
          <ul className="list-disc ml-8">
            <li>S1</li>
            <li>S1</li>
            <li>S1</li>
          </ul>
          </div>
          </div>
          <div className="w-1/2 mt- 24">
            <SizeQuantitySelector
              availableSizes={availableSizes}
              stockBySize={stockBySize}
            />
            <div className="flex items-end font-semibold mr-16 mt-24">
              <Button />
              <div className="ml-4">
                <Button text="Add to cart" onClick={() => setopen(true)} />
              </div>
              <div className="ml-4">
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
