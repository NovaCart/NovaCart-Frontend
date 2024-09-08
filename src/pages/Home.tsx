import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import HomeNavBar from "../components/HomeNavBar";
import SearchBar from "../components/searchBar";

const Home: React.FC = () => {
  const items = [
    {
      title: "White shirt",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: " ",
    },
    {
      title: "Item 1",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 2",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 3",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 4",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 5",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 6",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 7",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 8",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
    {
      title: "Item 9",
      imageUrl: "/images/1.jpg",
      price: 29.99,
      description: "",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto">
      <HomeNavBar />
      <div className="relative">
        <div className="relative">
          <Carousel />
        </div>
        <div className="absolute top-0 left-60 transform -translate-x-1/2 mt-4 z-10">
          <SearchBar />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-4xl font-bold">Our New Arrivals</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-8 ms-18">
        {currentItems.map((item, index) => (
          <div key={index}>
            <ItemCard
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-4 py-2 rounded mb-8 ${
              currentPage === index + 1
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
