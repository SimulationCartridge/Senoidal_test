import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from "../src/components/Pages/home.js";
import Nosotros from "../src/components/Pages/nosotros.js";
import NotFound from "./components/Pages/notfound.js";
import Navigation from "./components/Navigation/navigation.js";

//CSS//

import "./App.css";
import Archivo from "./components/Pages/archive.js";
import ArchivoDetails from "./components/Pages/archiveDetail.js";



function App() {

  return (
    <Router>

      <Navigation />

      <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/senoidal" element={<Home />} />
      <Route path="/archivo/:id" element={<ArchivoDetails />} />
      <Route path="/archivo/" element={<Archivo />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="*" element ={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
