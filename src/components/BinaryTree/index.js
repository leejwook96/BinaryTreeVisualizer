import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import BinaryTreeClass from "../../objects/BinaryTree";
import { FormControl, InputGroup, Button } from "react-bootstrap";

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
    this.setState({ cursorx: e.clientX });
    this.setState({ cursory: e.clientY });
    console.log(e.screenX);
    console.log(e.screenY);
  };

  changeNumber = () => {
    this.setState({ show: false });
    const value = this.textInput.current.value;
    this.root.changeValue(this.nodeClickedId, value);
    this.textInput.current.value = "";
    this.nodeClickedId = null;
    this.setState({
      data: this.root.convertToD3Tree(),
    });
  };

  handleKeyPress = (target) => {
    if (target.charCode === 13) {
      this.changeNumber();
    }
  };

  renderInputForm = () => {
    return (
      <InputGroup
        className="mb-3"
        onKeyPress={this.handleKeyPress}
        style={{
          width: 20 + "em",
          position: "absolute",
          top: this.state.cursory - 25 + "px",
          left: this.state.cursorx + 100 + "px",
        }}
      >
        <InputGroup.Prepend>
          <InputGroup.Text>New Value</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          ref={this.textInput}
          type="text"
          aria-label=""
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={this.changeNumber} type="submit">
            Update
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  };

  handleNodeClick = (node, evt) => {
    // console.log(node);
    if (this.state.show === false) {
      this.nodeClickedId = node.nodeId;
      this.onMouseClick(evt);
      this.setState({ show: true });
    } else {
      console.log(this.state.show);
      this.setState({ show: false });
      if (this.nodeClickedIn !== node.nodeId) {
        this.nodeClickedId = node.nodeId;
        this.onMouseClick(evt);
        this.setState({ show: true });
      } else {
        console.log("CLOSE");
        this.nodeClickedId = null;
        this.textInput.current.value = "";
      }
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="tree-container">
          <BinaryTreeRender
            data={this.state.data}
            handleNodeClick={this.handleNodeClick}
            transitionDuration={0}
          />
          <div>
            {this.state.show ? (
              <div>{this.renderInputForm()}</div>
            ) : (
              console.log(this.state.cursory, this.state.cursorx)
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BinaryTree;
