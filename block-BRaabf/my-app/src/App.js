import React from "react";

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      counter : 0,
      stepsFive : 5,
      stepsTen : 10,
      stepsFifteen : 15
    }
  }

  handleIncrement = () => {
    this.setState({
      counter : this.state.counter + 1,
      counter : this.state.counter + this.state.stepsFive
    })


  }

  handleDecrement = () => {
    this.setState({
      counter : this.state.counter - 1
    })
  }

  handleReset = () => {
    this.setState({
      counter : 0
    })
  }

  // handleStepFive = () => {
  //   this.setState({
  //     counter : this.state.counter + this.state.stepsFive
  //   })
  // }

  render() {
    return (
      <center>
        <h1>{this.state.counter }</h1>
        <h2>Steps</h2>
        <div>
          <button onClick={this.handleStepFive}>{this.state.stepsFive}</button>
          <button>{this.state.stepsTen}</button>
          <button>{this.state.stepsFifteen}</button>
        </div>
        <div>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
      </center>
    )
  }
}

export default App;
