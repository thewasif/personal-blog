import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/home";
import About from "./screens/about";
import Post from "./screens/post";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/post/:slug" exact component={Post} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;
