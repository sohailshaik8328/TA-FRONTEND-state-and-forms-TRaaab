import React from "react";
import "../styles/App.css"

let questions = [
  {
    Q: 'Who is it for?',
    A:
      'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
  },
  {
    Q: 'Does AltCampus help me get a job?',
    A:
      'Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.',
  },
  {
    Q: 'How does the entire process work?',
    A: 'You can read about it here - How it works.',
  },
  {
    Q: 'Is this course self-paced or batched?',
    A:
      'This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.',
  },
];



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question : ""
    }
  }

  handleClick = () => {
    this.setState({
      question : questions.map(question => <p>{question.A}</p>)
    })
  }

  render() {
    return (
      <>
      <center>
        <h1>Accordian</h1>
        {
          questions.map(question => <button onClick={this.handleClick} className="question">{question.Q}</button>)
        }
      </center>
    </>
    );
  }
}

export default App;
