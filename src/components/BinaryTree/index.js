import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import BinaryTreeClass from "../../objects/BinaryTree";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { Snackbar } from "@material-ui/core";

class BinaryTree extends React.Component {
  constructor(props) {
    super(props);
    this.defaultColor = "#92C2FC";
    this.textInput = React.createRef();
    this.nodeClickedId = null;
    this.root = new BinaryTreeClass();
    this.state = {
      data: [{ name: "NULL", nodeId: 0 }],
      show: false,
      cursorx: null,
      cursory: null,
    };
  }

  onMouseClick = (e) => {
    this.setState({ cursorx: e.pageX });
    this.setState({ cursory: e.pageY });
  };

  changeNumber = () => {
    this.setState({ show: false });
    const value = parseFloat(this.textInput.current.value);
    if (isNaN(value)) {
      return;
    }
    this.root.changeValue(this.nodeClickedId, value);
    this.textInput.current.value = "";
    this.nodeClickedId = null;
    this.setState({
      data: this.root.convertToD3Tree(),
    });
  };

  deleteNumber = () => {
    this.setState({ show: false });
    this.root.deleteNode(this.nodeClickedId);
    this.setState({
      data: this.root.convertToD3Tree(),
    });
  };

  handleEnterKeyPress = (target) => {
    if (target.charCode === 13) {
      this.changeNumber();
    }
  };

  handleNodeClick = (node, evt) => {
    if (this.state.show === false) {
      this.nodeClickedId = node.nodeId;
      this.onMouseClick(evt);
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
      if (this.nodeClickedId !== node.nodeId) {
        this.nodeClickedId = node.nodeId;
        this.onMouseClick(evt);
        this.setState({ show: true });
      } else {
        this.nodeClickedId = null;
        this.textInput.current.value = "";
      }
    }
  };

  handleResetButtonClick = () => {
    this.setState({
      data: [{ name: "NULL", nodeId: 0 }],
    });
  };

  renderInputForm = () => {
    return (
      <Snackbar
        open={this.state.show}
        onClose={() => {
          this.setState({ show: false });
        }}
        style={{
          width: 20 + "em",
          position: "absolute",
          top: this.state.cursory - 500 + "px",
          left: this.state.cursorx + 300 + "px",
        }}
      >
        <InputGroup className="mb-3" onKeyPress={this.handleEnterKeyPress}>
          <FormControl
            ref={this.textInput}
            type="text"
            aria-label=""
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              variant="secondary"
              onClick={this.changeNumber}
              type="submit"
            >
              Update
            </Button>
            <Button
              variant="secondary"
              onClick={this.deleteNumber}
              type="submit"
            >
              Delete
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Snackbar>
    );
  };

  render() {
    return (
      <div className="main-container">
        <br />
        <h1>Binary Tree Visualizer</h1>
        <br />
        <h5>
          {" "}
          {"\u25CF"} Click on any available nodes to update value or delete node
        </h5>
        <div className="tree-container">
          <Button
            variant="danger"
            className="float-right"
            onClick={this.handleResetButtonClick}
          >
            Reset
          </Button>

          <BinaryTreeRender
            data={this.state.data}
            handleNodeClick={this.handleNodeClick}
            transitionDuration={0}
          />
          <div>
            {this.state.show ? <div>{this.renderInputForm()}</div> : <></>}
          </div>
        </div>
      </div>
    );
  }
}

export default BinaryTree;
