import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <div>Count: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
