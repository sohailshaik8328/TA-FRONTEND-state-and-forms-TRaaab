import React from "react";
import "../stylesheets/App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep : 1,
      username : "",
      email : "",
      password : ""
    }

    this.handleInput = this.handleInput.bind(this)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  handleInput({target}) {
    let {name, value} = target
    this.setState({
      [name] : value
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let {currentStep, username, password, email} = this.state;

    alert(`your details \n ${username} \n ${email} \n ${password}`);

  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >=2 ? 3 : currentStep + 1;
    this.setState({
      currentStep : currentStep
    })
  }

  prev() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <=1 ? 1 : currentStep - 1;
    this.setState({
      currentStep : currentStep
    })
  }

  get previousButton() {
    let currentStep = this.state.currentStep;

    if(currentStep !== 1) {
      return (
        <button type="button" onClick={this.prev}>Prev</button>
      )
    } else {
      return null
    }
  }

 get nextButton() {
    let currentStep = this.state.currentStep;

    if(currentStep < 3) {
      return (
        <button type="button" onClick={this.next}>next</button>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Wizard Form</h1>

          Step {this.state.currentStep} 
            <Step1 currentStep={this.state.currentStep} username={this.state.username} handleInput={this.handleInput} />
            <Step2 currentStep={this.state.currentStep} email={this.state.email} handleInput={this.handleInput} />
            <Step3 currentStep={this.state.currentStep} password={this.state.password} handleInput={this.handleInput} />
            {this.previousButton}
            {this.nextButton}
        </form>
      </>
    );
  }
}


class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    if(this.props.currentStep !== 1) {
      return null;
    }
    return (
      <>
        <section>
          <div className="input_section">
            <label htmlFor="username">username  </label>
            <input value={this.props.username} onChange={this.props.handleInput} type="text" name="username" placeholder="Enter your username" />
          </div>
        </section>
      </>
    );
  }
}


class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
   
    return (
      <>
        <section>
          <div className="input_section">
            <label htmlFor="email">email  </label>
            <input value={this.props.email} onChange={this.props.handleInput} type="email" name="email" placeholder="Enter your email" />
          </div>
        </section>
      </>
    );
  }
}

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <section>
          <div className="input_section">
            <label htmlFor="password">password  </label>
            <input value={this.props.password} onChange={this.props.handleInput} type="password" name="password" placeholder="Enter your password" />
            <input type="submit" />
          </div>
        </section>
      </>
    );
  }
}


export default App;
