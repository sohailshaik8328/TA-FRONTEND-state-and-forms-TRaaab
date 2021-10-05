import React from 'react';
import '../stylesheets/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message : "",
    }
  }

  handleChange = (event) => {
    this.setState({
      message : event.target.value
    })
  }

  render() {
    return (
      <>
        <h1>Font Tester</h1>
        <input onChange={this.handleChange} type="text" placeholder="enter your text" ></input>
        <p>{this.state.message}</p>
      </>
    );
  }
}

export default App;
