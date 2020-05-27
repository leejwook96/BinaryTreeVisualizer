import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import btImg from "../../assets/tree.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <img src={btImg} width="500" style={{ marginLeft: "30%" }} />
      </>
    );
  }
}

export default HomePage;
