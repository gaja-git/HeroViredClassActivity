import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    let counter;
    this.state = {
      counter: 0,
    };
  }

  plusClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  minusClick = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  componentDidMount = () => {
    this.setState({
      counter: 100,
    });
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate called");
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount called");
  };

  render() {
    return (
      <div>
        <button onClick={this.plusClick}>+</button>
        <button onClick={this.minusClick}>-</button>
        <p>Counter = {this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;
