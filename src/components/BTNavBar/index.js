import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BTNavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Binary Tree Visualizer</Navbar.Brand>
      <Nav className="justify-content-center">
        <NavItem>
          <Nav.Link href="/bt">Binary Tree (BT) </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link href="/bst">Binary Search Tree (BST)</Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link href="/avl">Self Balancing Tree (AVL)</Nav.Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default BTNavBar;
