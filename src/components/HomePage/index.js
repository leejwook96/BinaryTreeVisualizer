import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Binary Tree Visualizer</Navbar.Brand>
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
      </>
    );
  }
}

export default HomePage;
