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
        collapsible={false}
        transitionDuration={this.props.transitionDurationValue}
        onClick={this.props.handleNodeClick}
        translate={{
          x: (window.innerWidth * 0.8) / 2,
          y: (window.innerHeight * 0.8) / 10,
        }}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "#ffffff",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "1.6rem",
                },
              },
            },
            leafNode: {
              circle: {
                fill: "green",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "1.6rem",
                },
              },
            },
          },
        }}
      />
    );
  }
}

export default BinaryTreeRender;
