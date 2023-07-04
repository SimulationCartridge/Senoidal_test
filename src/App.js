import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from "../src/components/Pages/home.js";
import Archive from "../src/components/Pages/archive.js";
import "./App.css";
import Nosotros from "../src/components/Pages/nosotros.js";
import NotFound from "./components/Pages/notfound.js";
import Navigation from "./components/Navigation/navigation.js";
import BlogPost from "./components/blogPost/blogpost.js";
import BlogPosts from "./components/blogPost/blogPosts.js";
import BlogDetails from "./components/Blog/BlogDetails.js";
import BlogList from "./components/Blog/BlogList.js";


function App() {
/*   const [showPost, setShowPost] = useState(false);

  const handleButtonClick = () => {
    setShowPost(!showPost);
  }   */
  return (
    <Router>

      <Navigation />

      <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/archivo/:id" element={<BlogDetails />} />
      <Route path="/archivo/" element={<BlogList />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="*" element ={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
