import React from "react";
import "../stylesheets/App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping : {
        address : "",
        zip : "",
        city : "",
        coutnry : ""
      },
      billing : {
        address : "",
        zip : "",
        city : "",
        coutnry : ""
      },
      isSame : false
    };
  }

  handleInput = ({target}) => {
    let {name, value} = target

    this.setState({
      shipping : {...this.state.shipping, [name] : value}
    })
  }

  handleCheckbox = () => {
    let {isSame} = this.state;
    this.setState(({ isSame }) => ({ isSame: !isSame })); 

    // this.setState({
    //   isSame : {isSame : !isSame}
    // })
  }
  render() {
    let {isSame, billing, shipping} = this.state;
    let billingData = isSame ? shipping : billing; 
    return (
      <>
      <div className="">
        <div className="form">
          <form>
            <div className="title">
              <h2>Shipping & Billing</h2>
            </div>
            <div className="shipping">
              <h3>Shipping Address</h3>

              <div className="row2">
                <div className="address">
                  <label htmlFor="address">Address</label>
                  <input name="address" onChange={this.handleInput} type="text" />
                </div>
                <div className="postal-code">
                  <label htmlFor="zip">ZIP/Postal Code</label>
                  <input name="zip" onChange={this.handleInput} type="text" />
                </div>
              </div>

              <div className="row3">
                <div className="city">
                  <label htmlFor="city">City</label>
                  <input name="city" onChange={this.handleInput} type="text" />
                </div>
                <div className="country">
                  <div className="label">
                    <label htmlFor="country">Country</label>
                  </div>
                  <div className="input">
                    <input name="country" onChange={this.handleInput}  type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="billing">
              <h3>Billing Address</h3>

              <div className="row1">
                <div className="checkbox">
                  <input className="checkbox_input" onChange={this.handleCheckbox} type="checkbox" />
                  <label>
                    <strong>
                      Is the Billing Address the same as the Shipping Address?
                    </strong>
                  </label>
                </div>
              </div>

              <div className="row3">
                <div className="address">
                  <label htmlFor="">Address</label>
                  <input onChange={this.handleInput} value={billingData.address} type="text" />
                </div>
                <div className="postal-code">
                  <label htmlFor="">ZIP/Postal Code</label>
                  <input onChange={this.handleInput} value={billingData.zip} type="text" />
                </div>
              </div>

              <div className="row4">
                <div className="city">
                  <label htmlFor="">City</label>
                  <input onChange={this.handleInput} value={billingData.city} type="text" />
                </div>

                <div className="country">
                  <label htmlFor="">Country</label>
                  <input onChange={this.handleInput} value={billingData.country} type="text" />
                </div>           
              </div>
            </div>
          </form>
        </div>
  </div>
      </>
    );
  }
}

export default App;
