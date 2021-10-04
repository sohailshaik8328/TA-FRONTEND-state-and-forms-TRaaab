import React from "react";

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      counter : 0,
      step : 5,
      maxValue : 5
    }
  }

  handleIncrement = () => {
    let {counter, step, maxValue} = this.state;

    this.setState({
      counter : counter + step > maxValue ? counter : counter + step
    })


  }

  handleDecrement = () => {
    this.setState({
      counter : this.state.counter - this.state.step
    })
  }

  handleReset = () => {
    this.setState({
      counter : 0
    })
  }

  render() {
    return (
      <center>
        <h1>{this.state.counter }</h1>
        <h2>Steps</h2>
        <div>
          {
            [5, 10, 15].map(step => <button onClick={() => {this.setState({
              step : step
            })}} className={this.state.step === step ? "active" : ""}>{step}</button>)
          }
          <h2>Max value</h2>
          {
            [15, 100, 200].map(maxValue => <button onClick={() => {this.setState({
              maxValue : maxValue
            })}} className={this.state.maxValue === maxValue ? "active" : ""}>{maxValue}</button>)
          }
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
