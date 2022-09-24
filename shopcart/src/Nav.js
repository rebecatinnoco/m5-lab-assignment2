import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Display  from './Display';
import Button  from './Button';
import Cart  from './Cart';
import { faShoppingCart, faRegistered } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Nav (props) {
let NumItem;
NumItem = <Todos todolists = {props.products} />
  return (
    <Router>
          <nav className="d-flex bg-info">
            <Link className="shop" to="/">
            <h1>Shop 2 <FontAwesomeIcon icon={faRegistered} />eact
            </h1>
            </Link>
            <Link className="cart" to="/Cart">
            <div className="total"><FontAwesomeIcon icon={faShoppingCart}/> .. {NumItem} .. Items</div>

            </Link>
          </nav>
      <Routes>
        <Route path="/" element={<Display 
              products={props.products}
              handleIncrement={props.handleIncrement}
              handleDecrease={props.handleDecrease}
              sortType={props.sortType}
              listNum={props.listNum}
              onSort={props.onSort}/>} />
        <Route path="/Cart" element={ <Cart 
              products={props.products}
              IncrementItem={props.NumItem}/>}  />
        <Route path="/Button" element={ <Button 
              products={props.products}
              IncrementItem={props.NumItem}/>}  />
      </Routes>
    </Router>

  )
}
function Todos(props) { 
  let t= 0;
  t = props.todolists.map(todolists => todolists.quantity).reduce((prev, next) => prev + next)

  return(
    <div>
      <div id="total">{t}</div>
    </div>
  )
}