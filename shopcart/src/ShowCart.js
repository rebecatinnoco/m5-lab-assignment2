import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowCart(props) {
    return (
        <div className="w-150">
            <h2>Your Cart Items</h2>
            {props.products.map((prod) => (

                <div>teste</div>
                // if (prod.quantity > 0) {
                //     return (
                //         <div key={prod.id} className="border">
                //         <img src={prod.img} alt={prod.description} width="150"></img>
                //         <p className="qty d-inline mx-5 fw-bold">Quantity {prod.quantity}</p>
                //         <p className="px-4">{prod.description}</p>
                //         </div>
                //     );
                // }
            ))}
        </div>
    );
}
export default ShowCart;