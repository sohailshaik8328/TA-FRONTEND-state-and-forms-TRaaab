function Card(props) {
    function setStyle() {
      return `${props.fontfamily} `;
    }
  
    function setRange(size = Math.floor(props.range)) {
      if (size) {
        return `${size}px`;
      }
    }
  
    return (
      <div className='card flex_30'>
        <div className='flex justify_between items_center'>
          <div className='font_family'>
            <h4>{props.fontfamily}</h4>
            <p contentEditable="true">{props.fontfamily}</p>
          </div>
          <p>Variables</p>
        </div>
        <h1 style={{ fontSize: setRange(), fontFamily: setStyle() }}>
          {props.inner}
        </h1>
      </div>
    );
  }
  export default Card;