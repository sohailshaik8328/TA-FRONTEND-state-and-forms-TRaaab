import logo from './logo.svg';
import './App.css';
import React from 'react'
import "../assets"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image : 0
    }
  }

  handleBasket = () => {
    return (
      this.state.image
    )
  }
  
  render() {
    return (
      <center>
        <button onClick={this.handleBasket()}>Basketball</button>
        <button>PubG</button>
        <button>Tiger</button>
        <button>Phone</button>
        <button>Laptop</button>
        <button>Cricket</button>
        <img src={} />
        
      </center>
    )
  }
}

export default App;
