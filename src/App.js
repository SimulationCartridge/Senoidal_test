import React, { Component } from "react";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from '../src/components/Pages/home.js';
import Archive from "./components/Archivo/archive.js";
import "./App.css";


const router = createBrowserRouter (createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="inicio" element={<Home />} />
    <Route path="archivo" element={<Archive />} />
  </Route>
))


class App extends Component {

  render() {
    return (
    <RouterProvider router={router} />      
    )
  }
}

export default App;
