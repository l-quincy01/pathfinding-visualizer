import { Component } from "react";
import "./Node.css";
export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //added isVisited
    const { isStart, isFinish, isVisited } = this.props;
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isVisited
      ? "node-visited"
      : "";
    return <div className={`node ${extraClassName}`}> </div>;
  }
}

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
