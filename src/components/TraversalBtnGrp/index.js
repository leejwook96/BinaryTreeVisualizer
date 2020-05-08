import React from "react";
import { ButtonGroup, Button, OverlayTrigger, Popover } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class TraversalBtnGrp extends React.Component {
  constructor(props) {
    super(props);
  }

  getTraversalResult = (order) => {
    if (order[0] === 'I') {
      // in
      return this.props.tree.inOrder();
    } else {
      if (order[1] === 'r') {
        // pre
        return this.props.tree.preOrder();
      } else {
        // post
        return this.props.tree.postOrder();
      }
    }
  }

  renderPopoverContent = (order) => {
    return (
      <Popover id="popover-positioned-bottom">
        <Popover.Title as="h3">{`${order} Traversal`}</Popover.Title>
        <Popover.Content>
          {this.getTraversalResult(order)}
        </Popover.Content>
      </Popover>
    );
  }

  renderPopover = () => {
    return (
      <ButtonGroup>
      {
        ["Inorder", "Preorder", "Postorder"].map(order => (
          <OverlayTrigger key={order} placement="bottom" trigger="click" overlay={this.renderPopoverContent(order)} rootClose >
            <Button variant="success">{order}</Button>
          </OverlayTrigger>
        ))
      }
      </ButtonGroup>
    );
  }
  render() {
    return (
      <>
        {this.renderPopover()}
      </>
    );
  }
}

export default TraversalBtnGrp;
