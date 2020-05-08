import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import TraversalBtnGrp from "../TraversalBtnGrp";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Slider,
  Typography,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Snackbar,
} from "@material-ui/core";

import AvlTreeClass from "../../objects/AvlTree";

class AvlTree extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.transitionDurationValue = 500;
    this.avl = new AvlTreeClass();
    this.SBSeverity = "";
    this.SBMsg = "";
    this.state = {
      data: [{ name: "NULL" }],
      transitionDuration: 500,
      rebalanceCheckbox: true,
      balanceTreeBtnDisabled: true,
      snackBarOpen: false,
    };
  }

  addNumber = () => {
    const value = parseFloat(this.textInput.current.value);
    if (isNaN(value)) {
      return;
    }
    this.avl.insertValue(value);
    this.textInput.current.value = "";
    if (this.state.rebalanceCheckbox) {
      this.avl.balance();
    }
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

  handleResetButtonClick = () => {
    this.setState({ data: [{ name: "NULL" }] });
    this.avl = new AvlTreeClass();
  };

  renderSnackBar = () => {
    let closeSnackbar = () => {
      this.setState({ snackBarOpen: false });
    };
    return (
      <Snackbar
        open={this.state.snackBarOpen}
        autoHideDuration={1000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={closeSnackbar} severity={this.SBSeverity}>
          {this.SBMsg}
        </Alert>
      </Snackbar>
    );
  };

  balanceIfNotBalanced = () => {
    if (this.avl.root === null) {
      // TODO Error Alert. Tree is null
      this.SBMsg = "Tree is empty!";
      this.SBSeverity = "error";
      this.setState({ snackBarOpen: true });
      return;
    }
    if (this.avl.isBalanced()) {
      // TODO Info Alert. Tree is already balanced
      this.SBMsg = "Tree is already balanced";
      this.SBSeverity = "info";
      this.setState({ snackBarOpen: true });
      return;
    } else {
      this.avl.balance();
      this.setState({
        data: this.avl.convertToD3Tree(),
        transitionDuration: this.transitionDurationValue,
      });
    }
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

  renderAutomaticBalanceCheckbar = () => {
    return (
      <FormGroup col>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.rebalanceCheckbox}
              onChange={(e) => {
                this.setState({
                  balanceTreeBtnDisabled: e.target.checked,
                  rebalanceCheckbox: e.target.checked,
                });
              }}
            />
          }
          label="Rebalance Automatically"
        />
        <Button
          variant="primary"
          onClick={this.balanceIfNotBalanced}
          disabled={this.state.balanceTreeBtnDisabled}
        >
          Balance Tree
        </Button>
      </FormGroup>
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
        <h1>AVL Tree Visualizer</h1>
        <TraversalBtnGrp tree={this.avl} />
        <div className="tree-container">
          <div className="bst-add-form float-left">
            {this.renderAddNodeInputGroup()}
            {this.renderRenderSliderBar()}
            {this.renderAutomaticBalanceCheckbar()}
          </div>
          {this.renderResetBtn()}
          <BinaryTreeRender
            data={this.state.data}
            transitionDurationValue={this.state.transitionDuration}
          />
        </div>

        {this.renderSnackBar()}
      </div>
    );
  }
}

export default AvlTree;
