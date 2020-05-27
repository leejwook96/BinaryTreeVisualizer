import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import HomePage from "./components/HomePage";
import BinarySearchTree from "./components/BinarySearchTree";
import BinaryTree from "./components/BinaryTree";
import { Route, BrowserRouter } from "react-router-dom";
import AvlTree from "./components/AvlTree";
import BTNavBar from "./components/BTNavBar";

const routing = (
  <BrowserRouter>
    <div>
      <BTNavBar />
      <Route path="/home" component={HomePage} />
      <Route path="/bt" component={BinaryTree} />
      <Route path="/bst" component={BinarySearchTree} />
      <Route path="/avl" component={AvlTree} />
      <Route component={HomePage} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));
