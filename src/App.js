import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from "../src/components/Pages/home.js";
import Archive from "../src/components/Pages/archive.js";
import "./App.css";
import Nosotros from "../src/components/Pages/nosotros.js";
import NotFound from "./components/Pages/notfound.js";
import Navigation from "./components/Navigation/navigation.js";


function App() {
  
  return (
    <Router>

      <Navigation />

      <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/archivo" element={<Archive />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="*" element ={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
