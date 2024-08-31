import React from "react";
import MasonaryGrid from "../components/galleryPage/MansonaryGrid";
import Footer from "../components/Footer";
import HomeNavBar from "../components/HomeNavBar";

function Gallery() {
  return (
    <div>
      <HomeNavBar />
      <MasonaryGrid />
      <Footer />
    </div>
  );
}

export default Gallery;
