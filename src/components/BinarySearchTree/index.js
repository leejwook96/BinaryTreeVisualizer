import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BinarySearchTree extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.nextId = 4;
    this.state = {
      numberInput: "",
      data: [
        {
          name: "1",
          children: [
            {
              name: "2",
            },
            {
              name: "3",
            },
          ],
        },
      ],
    };
  }

  addNumber = (number) => {
    const value = this.textInput.current.value;
    console.log(value);
    this.textInput.current.value = "";
  };

  render() {
    return (
      <div className="main-container">
        <div className="tree-container">
          <div className="bst-add-form">
            <InputGroup className="mb-3">
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
                  color="primary"
                  variant="primary"
                  onClick={this.addNumber}
                >
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <BinaryTreeRender data={this.state.data} />;
        </div>
      </div>
    );
  }
}

export default BinarySearchTree;
