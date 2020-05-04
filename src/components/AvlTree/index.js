import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Slider, Typography, Grid } from "@material-ui/core";

import AvlTreeClass from "../../objects/AvlTree";

class AvlTree extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.transitionDurationValue = 500;
    this.nextId = 4;
    this.avl = new AvlTreeClass();
    this.state = {
      data: [{ name: "NULL" }],
      transitionDuration: 500,
    };
  }

  addNumber = () => {
    const value = this.textInput.current.value;
    this.avl.insertValue(parseFloat(value));
    this.textInput.current.value = "";
    this.avl.balance();
    this.setState({
      data: this.avl.convertToD3Tree(),
      transitionDuration: this.transitionDurationValue,
    });
  };

  handleKeyPress = (target) => {
    if (target.charCode === 13) {
      this.addNumber();
    }
  };

  handleValueChange = (event, newValue) => {
    this.transitionDurationValue = newValue;
  };

  render() {
    // let avl = new AvlTreeClass();
    // avl.root = new Node(20);
    // avl.root.left = new Node(10);
    // avl.root.right = new Node(40);
    // avl.root.right.left = new Node(25);
    // avl.root.right.left.right = new Node(30);
    // avl.root.right = avl.root.right.LRRotation();
    // let data = avl.convertToD3Tree();

    // let avl = new AvlTreeClass();
    // avl.root = new Node(20);
    // avl.root.right = new Node(30);
    // avl.root.right.right = new Node(40);
    // avl.root = avl.root.RRRotation();
    // let data = avl.convertToD3Tree();

    // let avl = new AvlTreeClass();
    // avl.root = new Node(20);
    // avl.root.addLeft(new Node(10));
    // avl.root.addRight(new Node(30));
    // avl.root.right.addRight(new Node(40));
    // avl.root.right.addLeft(new Node(25));
    // avl.root.right.left.addLeft(new Node(22));

    // avl.root = avl.root.RLRotation();
    // let data = avl.convertToD3Tree();

    // avl.root.getAllHeight();
    // avl.printHeight();
    return (
      <div className="main-container">
        <div className="tree-container">
          <div className="bst-add-form">
            <InputGroup className="mb-3" onKeyPress={this.handleKeyPress}>
              <InputGroup.Prepend>
                <InputGroup.Text>Add more numbers</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                ref={this.textInput}
                type="text"
                aria-label=""
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  variant="primary"
                  onClick={this.addNumber}
                  type="submit"
                >
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>

            <Typography id="continuous-slider" gutterBottom>
              <b>Render Speed</b>
            </Typography>

            <Grid container spacing={2}>
              <Grid item>Faster</Grid>
              <Grid item xs>
                <Slider
                  defaultValue={this.transitionDurationValue}
                  step={100}
                  min={0}
                  max={5000}
                  onChange={this.handleValueChange}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
              <Grid item>Slower</Grid>
            </Grid>
          </div>
          <BinaryTreeRender
            data={this.state.data}
            // data={data}
            transitionDurationValue={this.state.transitionDuration}
          />
        </div>
      </div>
    );
  }
}

export default AvlTree;
