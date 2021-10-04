import React from "react";
import "../styles/App.css"
import data from './data.json'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    activeIndex : null
    }
  }

  render() {
    return (
      <>
        <center>
          <ul>
            {
              data.map((question, active) => {
                return (
                  <li>
                    <h2 onClick={() => {
                      this.setState({activeIndex : this.state.activeIndex === active ? null : active})
                    }} className="question">{question.Q}</h2>
                   {active === this.state.activeIndex &&  <p className="answer">{question.A}</p>}
                  </li>
                )
              })
            }
          </ul>
        </center>
      </>
    );
  }
}

export default App;
