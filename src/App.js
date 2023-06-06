import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from '../src/components/Pages/home.js'
import "./App.css";



function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;