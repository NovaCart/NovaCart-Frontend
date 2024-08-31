import React from "react";

const images = [
  "/images/design4.jpg",
  "/images/image 2.jpg",
  "/images/design2.jpg",
  "/images/design3.jpg",
  "/images/design5.jpg",
  "/images/design6.jpg",
  "/images/design7.jpg",
  "/images/design8.jpg",
  "/images/design9.jpg",
  "/images/design10.jpeg",
  "/images/design11.jpg",
  "/images/design12.jpg",
  "/images/design13.jpg",
];

const MasonaryGrid = () => {
  return (
    <div className="columns-2 sm:columns-4 lg:column-4 px-4 py-10 md:py-20 md:px-6 gap-4">
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img
            src={src}
            className="w-full object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonaryGrid;
