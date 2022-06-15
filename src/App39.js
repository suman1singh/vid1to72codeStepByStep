import React from "react";
import User39 from "./User39";

export default class App39 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
      <User39 count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count+70 })}>
          Update count
        </button>
      </div>
    );
  }
}
