import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./components/HomePage";
import BinarySearchTree from "./components/BinarySearchTree";
import BinaryTree from "./components/BinaryTree";
import { Route, BrowserRouter } from "react-router-dom";
import AvlTree from "./components/AvlTree";

const routing = (
  <BrowserRouter>
    <div>
      <Route path="/" component={HomePage} />
      <Route path="/bt" component={BinaryTree} />
      <Route path="/bst" component={BinarySearchTree} />
      <Route path="/avl" component={AvlTree} />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
