import React from "react";
import Tree from "react-d3-tree";

class BinaryTreeRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Tree
        data={this.props.data}
        orientation="vertical"
        translate={{
          x: (window.innerWidth * 0.8) / 2,
          y: (window.innerHeight * 0.8) / 2,
        }}
      />
    );
  }
}

export default BinaryTreeRender;
