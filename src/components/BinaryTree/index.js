import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import BinaryTreeClass from "../../objects/BinaryTree";
import {
  FormControl,
  InputGroup,
  Button,
  Card,
  Accordion,
} from "react-bootstrap";

class BinaryTree extends React.Component {
  constructor(props) {
    super(props);
    this.defaultColor = "#92C2FC";
    this.textInput = React.createRef();
    this.nodeClickedId = null;
    this.root = new BinaryTreeClass();
    this.state = {
      data: [{ name: "NULL", nodeId: 0 }],
      prev: [{ name: "NULL", nodeId: 0 }],
      show: false,
      cursorx: null,
      cursory: null,
    };
  }

  onMouseClick = (e) => {
    this.setState({ cursorx: e.clientX });
    this.setState({ cursory: e.clientY });
  };

  changeNumber = () => {
    console.log(this.nodeClickedId);
    this.setState({ show: false });
    const value = this.textInput.current.value;
    if (value.toUpperCase() !== "NULL" && isNaN(parseFloat(value))) {
      return;
    }
    this.root.changeValue(this.nodeClickedId, value);
    this.textInput.current.value = "";
    this.nodeClickedId = null;
    this.setState({
      prev: this.state.data,
      data: this.root.convertToD3Tree(),
    });
  };

  handleKeyPress = (target) => {
    if (target.charCode === 13) {
      this.changeNumber();
    }
  };

  handleNodeClick = (node, evt) => {
    console.log(node.nodeId);
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
    console.log(this.nodeClickedId);
  };

  handleUndoButtonClick = () => {
    this.setState({
      data: this.state.prev,
    });
  };

  handleResetButtonClick = () => {
    this.setState({
      data: [{ name: "NULL", nodeId: 0 }],
      prev: [{ name: "NULL", nodeId: 0 }],
    });
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

  render() {
    return (
      <div className="main-container">
        <br />
        <h1>Binary Tree Visualizer</h1>
        <div className="instruction">
          <h2 style={{ fontWeight: "bold" }}>Instructions</h2>
          <h5> Different Functionalities: </h5>
          <Accordion className="instruction-card">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {"\u25cf"} Add/Change Node
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>Click on any available nodes to update its value.</p>
                  <p>
                    Valid input value: 1, 1.5, -1000, 2349024nn (will be treated
                    as 2349024)
                  </p>
                  <p>Invalid input value: akldf, (empty string), r1238fjf</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  {"\u25cf"} Remove Node
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>
                    Click on any available nodes to update its value to NULL
                    (case-insensitive).
                  </p>
                  <p>Note: it will remove all its children</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  {"\u25cf"} Undo
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <p>Can go back to previous state for once</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  {"\u25cf"} Reset
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <p>Reset back to empty tree</p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="tree-container">
          <Button
            variant="info"
            className="float-right"
            onClick={this.handleUndoButtonClick}
          >
            Undo
          </Button>

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
