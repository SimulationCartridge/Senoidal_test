import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Root from "../src/components/Root/root.js";
import Home from '../src/components/Pages/home.js'
import "./App.css";



class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
