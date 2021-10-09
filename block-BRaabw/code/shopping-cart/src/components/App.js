import React from 'react';
import '../stylesheets/index.css';
import SideBar from './SideBar';
import Main from './Main';
import Cart from './Cart';
import { products } from "../data.json";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedSize : [],
        addToCart : [],
     }
  }

  componentDidMount() {
    if(localStorage.cart) {
      this.setState({addToCart : JSON.parse(localStorage.cart) || []})
    }
    window.addEventListener('beforeunload', this.handleLocalStorage)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleLocalStorage)
  }



  handleSize = (size) => {
    if(this.state.selectedSize.includes(size)) {
        this.setState((prevState) => ({
            selectedSize : prevState.selectedSize.filter((s) => s !== size)
        }))
    } else {
        this.setState(prevState => (
            {selectedSize : prevState.selectedSize.concat(size)}
      ))
    }
  }

  handleAddToCart = (p) => {
    let isPresent = this.state.addToCart.findIndex((product) => product.id === p.id) !== -1;
    if(isPresent) {
      this.incrementQuantity(p.id)
    } else {

      this.setState(prevState => ({
        addToCart : prevState.addToCart.concat({...p, quantity : 1})
      }))
    }
  }

  incrementQuantity = (id) => {
   this.setState((prevState) => {
     let updatedCartItems = prevState.addToCart.map((p) => {
       if(p.id === id) {
         return {
           ...p,
           quantity : p.quantity + 1
         }
       }
       return p;
     })
     return {
      addToCart : updatedCartItems
    }   
  })
  }

  decrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.addToCart.map((p) => {
        if(p.id === id) {
          return {
            ...p,
            quantity : p.quantity - 1
          }
        }
        return p;
      })
      return {
        addToCart : updatedCartItems
      }
    })
   }

   deleteItem = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.addToCart.filter((p) => {
        return p.id !== id
      })
      return {
        addToCart : updatedCartItems
      }
    })
   }

   handleLocalStorage = () => {
     localStorage.setItem("cart", JSON.stringify(this.state.addToCart))
   }

  render() {

    return (
     <div>
      <SideBar products={products} selectedSize={this.state.selectedSize} handleSize={this.handleSize}  />
      <Main products={products} selectedSize={this.state.selectedSize} handleSize={this.handleSize} handleAddToCart={this.handleAddToCart} />
      <Cart cartItems={this.state.addToCart} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} deleteItem={this.deleteItem} />
     </div>
    );
  }
}

export default App;
