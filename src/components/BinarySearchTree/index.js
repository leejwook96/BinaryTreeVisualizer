import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import TraversalBtnGrp from "../TraversalBtnGrp";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Slider, Typography, Grid } from "@material-ui/core";

import BinarySearchTreeClass from "../../objects/BinarySearchTree";

class BinarySearchTree extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.transitionDurationValue = 500;
    this.bst = new BinarySearchTreeClass();
    this.state = {
      data: [{ name: "NULL" }],
      transitionDuration: 500,
    };
  }

  addNumber = () => {
    const value = parseFloat(this.textInput.current.value);
    if (isNaN(value)) {
      return;
    }
    this.bst.insertValue(value);
    this.textInput.current.value = "";
    this.setState({
      data: this.bst.convertToD3Tree(),
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

  handleResetButtonClick = () => {
    this.setState({ data: [{ name: "NULL" }] });
    this.bst = new BinarySearchTreeClass();
  };

  renderAddNodeInputGroup = () => {
    return (
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
          <Button variant="primary" onClick={this.addNumber} type="submit">
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  };

  renderRenderSliderBar = () => {
    return (
      <>
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
      </>
    );
  };

  renderResetBtn = () => {
    return (
      <Button
        variant="danger"
        className="float-right"
        onClick={this.handleResetButtonClick}
      >
        Reset
      </Button>
    );
  };

  render() {
    return (
      <div className="main-container">
        <br />
        <h1>Binary Search Tree Visualizer</h1>
        <TraversalBtnGrp tree={this.bst} />
        <div className="tree-container">
          <div className="bst-add-form float-left">
            {this.renderAddNodeInputGroup()}
            {this.renderRenderSliderBar()}
          </div>
          {this.renderResetBtn()}
          <BinaryTreeRender
            data={this.state.data}
            transitionDurationValue={this.state.transitionDuration}
          />
        </div>
      </div>
    );
  }
}

export default BinarySearchTree;
