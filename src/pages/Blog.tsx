import React from "react";
import HomeNavBar from "../components/HomeNavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Gallery from "../components/BlogPage/BlogGallery";

export default function Blog() {
  const mainImage = "../images/home 2.webp";
  const thumbnails = [
    "../images/home 3.webp",
    "../images/home 3.webp",
    "../images/home 3.webp",
    "../images/home 3.webp",
  ];
  return (
    <div>
      <HomeNavBar />
      <div className="mx-auto px-4">
        <div className="p-4">
          <div className="flex items-center mb-2">
            <h1 className="text-left font-serif text-4xl my-4 ml-24">
              White neck shift dress
            </h1>
            <h5 className="absolute text-sm font-semibold ml-[700px] mt-16">
              Denz teen -{" "}
              <span className="text-sm font-semibold text-gray-400">
                Austrailia
              </span>
            </h5>
            <div className="flex items-end justify-between ml-[600px] mr-16">
              <Button />
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
        <hr className="border-gray-300 border-t-2" />
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
        <div className="mt-96">
          <Footer />
        </div>
      </div>
    </div>
  );
}
