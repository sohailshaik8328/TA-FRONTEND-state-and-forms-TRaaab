import React from 'react';
import "../stylesheets/style.css"
import Card from './Card';
class Fonts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      range: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  changeRange = (event) => {
    this.setState({
      range: event.target.value,
    });
  };

  render() {
    console.log(this.state.range);
    
    var fontsArray = ["Arial","Ephesis", "Calibri", "Tahoma", "Papyrus", "Times New Roman", "Courier New", "Roboto", "besley", "nunito", "Poppins", "Open Sans"];

    return (
      <div className='container'>
        <header className='flex justify_between items_center header_animate '>
          <div className='input_div'>
            <select className='select'>
              <option value='Custom'>Custom</option>
              <option value='Custom'>one</option>
            </select>
            <input
              type='text'
              value={this.state.text}
              placeholder='Enter your Text'
              onChange={this.handleChange}
              className='inputStyle'
            />
          </div>

          <div className='flex items_center range_div'>
            <p className='range_par'>{this.state.range}px</p>
            <input
              type='range'
              onChange={this.changeRange}
              className='input_range'
            />
          </div>
        </header>

        <div>
          <h3 className="title">Font families</h3>
        </div>

        <div className='allCards flex justify_between flex_wrap'>
          {fontsArray.map((eachFont) => (
            <Card
              inner={this.state.text}
              fontfamily={eachFont}
              range={this.state.range}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Fonts;