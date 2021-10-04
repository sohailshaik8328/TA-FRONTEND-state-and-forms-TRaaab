import '../stylesheets/App.css';
import data from "../data.json";
import React from 'react';
import { uuid } from 'uuidv4';
import Modal from 'react-awesome-modal';
import { render } from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible : false,
      id:null
    }
  }
  openModal(id) {
    this.setState({
        visible : true,
        id:id
    });
}

closeModal() {
    this.setState({
        visible : false,
        id:null
    });
}



  render() {
    var array = data.map((movie) => movie);
    return (
      <section>
        <div className="container">
          <h1 className="heading">Movies</h1>
          <ul className="flex wrap">
          {
           array.map((movie) => {
             return (
               <article className="flex-25 card" >
                  <img className="image" src={movie.Images[0]} />
                  <h2 className="title">{"Movie Name - " + movie.Title}</h2>
                  <p className="date">{"Released - " + movie.Released}</p>
             
                  <center>
                   <a>
                   <input type="button" value="Open" onClick={() => this.openModal(movie.imdbID)} />                 
                    </a>
                  </center>

                  <ModalSection clickedId={this.state.id} visible={this.state.visible} movies={movie} onClickAway={() => this.closeModal()} onClick={() => this.closeModal()} />

                
               </article>
             )
           }) 
          }
          </ul>
        </div>
      </section>
    );
  }
}

export default App;


class ModalSection extends React.Component{
  constructor(props){
    super(props);
  }

 
render(){
  console.log(this.props)
  return(
    <>
  {
    this.props.clickedId === this.props.movies.imdbID?<Modal  visible={this.props.visible} width="400" height="300" effect="fadeInUp" onClickAway={this.props.onClickAway}>
    <div>
        <h1>{this.props.movies.Title}</h1>
        <p>Some Contents</p>
        <a href="javascript:void(0);" onClick={this.props.onClick}>Close</a>
    </div>
  </Modal>:""
  
  }
      
      
    </>
  
  )
}
 
}
