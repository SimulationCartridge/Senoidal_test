import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from "../src/components/Pages/home.js";
import BlogDetails from "./components/Blog/BlogDetails.js";
import BlogList from "./components/Blog/BlogList.js";
import Nosotros from "../src/components/Pages/nosotros.js";
import NotFound from "./components/Pages/notfound.js";
import Navigation from "./components/Navigation/navigation.js";

//CSS//

import "./App.css";


function App() {

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
