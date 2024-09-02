import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import History from "./pages/History";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Admin from "./pages/Admin";
import Women from "./pages/Women";
import Men from "./pages/Men";
import SignUp from "./pages/SignUp";
import WishList from "./pages/WishList";
import Settings from "./pages/Settings";
import AdminUser from "./pages/AdminUser";
import ReviewPage from "./pages/AdminReview";
import Cart from "./pages/Cart";
// import LogIn from "./pages/LogIn";
import Search from "./pages/Search";
import Payment from "./pages/Payment";
import Blog from "./pages/Blog";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/history" element={<History />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminuser" element={<AdminUser />} />
        <Route path="/adminreview" element={<ReviewPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
