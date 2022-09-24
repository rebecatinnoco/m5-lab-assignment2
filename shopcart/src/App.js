import './App.css';
import { products } from './products';
import Nav  from './Nav';
import React, { Component}from "react";
import "bootstrap/dist/css/bootstrap.min.css";


// const  = <FontAwesomeIcon icon={faShoppingCart} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sortType: "def",
      listNum: "",
      products: products }
    
  }
  
  handleIncrement = (addQty) => {
    if(addQty.quantity < 5) {
          const updateQty = addQty.quantity++;
          this.setState({updateQty});
        }
    };

  handleDecrease = (minusQty) => {
    if(minusQty.quantity > 0) {
          const updateQty = minusQty.quantity--;
          this.setState({updateQty});
        }
    }
      onSort = (listNum, sortType) => {
        listNum.sort((a, b) => {
            switch (sortType) {
                
                case "desc": return b.price-a.price
                break;
                case "asc": return a.price-b.price;
                break;
                default : return a.id-b.id;
            }
        });
        this.setState({ sortType });
      };
 
  
render () {

  return (
      <div className="App">
        <Nav 
          products={this.state.products}
          NumItem={this.props.NumItem}
          handleIncrement={this.handleIncrement}
          handleDecrease={this.handleDecrease}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
          onSort={this.onSort} />
        {/* <Display 
          products = {this.state.products}
          handleIncrement = {this.handleIncrement}
          DeacreaseItem = {this.handleDecrease}
          
        /> */}
      </div>
  );
}
}

export default App;



