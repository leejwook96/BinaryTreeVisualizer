import React from "react";
import "../../App.scss";
import BinaryTreeRender from "../BinaryTreeRender";

class BinaryTree extends React.Component {
  constructor(props) {
    super(props);
    this.defaultColor = "#92C2FC";
    this.state = {
      data: [
        {
          name: "1",
          children: [
            {
              name: "3",
            },
            {
              name: "2",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="main-container">
        <div className="tree-container">
          <BinaryTreeRender data={this.state.data} />;
        </div>
      </div>
    );
  }
}

export default BinaryTree;
