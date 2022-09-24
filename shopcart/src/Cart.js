import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Cart(props) {
    return (
        <div>
            <ShowCart 
            products={props.products}
            NumItem={props.NumItem}
            />

        </div>
    );
}

function ShowCart(props) {
    return (
        <div className="w-150">
            <h2>Your Cart Items</h2>
            
            {props.products.map((products) =>  (
                    <div key={products.id} id="items" className="border border-1 pt-3">
                        <img src={products.img} alt={products.description} width="150"></img>
                        <p className="qty d-inline mx-5 fw-bold">Quantity: {products.quantity}</p>
                        <p className="px-4">{products.description}</p>
                    </div>     
                   )
            )}
        
        <Link to="/Button">
        <button className="btn btn-primary" href="/login">Check Out</button>
        </Link>
        </div>
    )
}

