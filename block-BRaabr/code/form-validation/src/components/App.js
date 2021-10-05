import React from "react"
import "../stylesheets/index.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : "",
      date : "",
      readonly : "",
      disabled : "",
      textarea : "",
      disabledtextarea : "",
      errors : {
        text : "",
        date : "",
        readonly : "",
        disabled : "",
        textarea : "",
        disabledtextarea : "",
      }
    }
    this.file = React.createRef();
  }

  handleInput = ({target}) => {
    let {name, value} = target;

    let errors = this.state.errors;

    switch (name) {
      case "text" : 
      errors.text = value.length < 10 ? "Text input should not be empty" : ""
      ;
      case "date" : 
      errors.date = !value ? "Date input should not be empty" : ""
      ;
      case "textarea" : 
      errors.textarea = value.length < 20 ? "textarea length should be atleast 20 characters" : ""
      ;
    }
    
    this.setState({
      errors, [name] : value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Hai" + this.state.text + this.state.date + this.state.readonly  +  this.state.disabled + this.state.textarea + this.state.disabledtextarea)
  }

  render() {
    let {text, date, textarea} = this.state.errors;
    return (
      <>
        <section>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Or
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 anchor">
                    start your 14-day free trial
                  </a>
                </p>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={this.handleSubmit}>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="text" className="sr-only">Email address</label>
                    <input className={text && "error"} value={this.state.text} onChange={this.handleInput} id="text" name="text" type="text" autoComplete="email"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Text" />
                    <span className="error_message">{text}</span>
                  </div>
                  <div>
                    <label htmlFor="date" className="sr-only">date</label>
                    <input className={date && "error"} value={this.state.date} onChange={this.handleInput}  id="date" name="date" type="date" autoComplete="current-date"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="date" />
                    <span className="error_message">{date}</span>
                  </div>
                  <div>
                    <label htmlFor="file" className="sr-only">file</label>
                    <input ref={this.file} onChange={this.handleInput} id="file" name="file" type="file" autoComplete="current-file"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="file" />
                  </div>
                  <div>
                    <label htmlFor="readonly" className="sr-only">Read-Only</label>
                    <input value={this.state.readonly} onChange={this.handleInput} readOnly id="readonly" name="readonly" type="text" autoComplete="current-text"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Read Only" />
                  </div>
                  <div>
                    <label htmlFor="disabled" className="sr-only">date</label>
                    <input value={this.state.disabled} onChange={this.handleInput} disabled id="disabled" name="disabled" type="text" autoComplete="current-disabled"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="disabled" />
                  </div>
                  <div>
                    <label htmlFor="textarea" className="sr-only">textarea</label>
                    <textarea className={textarea && "error"} value={this.state.textarea} onChange={this.handleInput} id="textarea" name="textarea"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter textarea" />
                    <span className="error_message">{textarea}</span>
                  </div>
                  <div>
                    <label htmlFor="diabledtextarea" className="sr-only">disabledtextarea</label>
                    <textarea value={this.state.disabledtextarea} onChange={this.handleInput} disabled id="disabledtextarea" name="disabledtextarea"  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter textarea disabled" />
                  </div>
                </div>


                <div>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
      </>
    );
  }
}

export default App;
