import './App.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Display (props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
 
  const handleShow = (products) => {
    setShow(true);
    setShowImge(products);
  }
  const handleClose = () => setShow(false);

  // const [data, setData] = useState([]);

  return (
    <div>
      <div id="select">
      <label>Sort Price By: </label>
        <> </>
           <select
            defaultValue={'def'}
            onChange={(e) => props.onSort(props.products, e.target.value)}>
               <option value="asc">Lowest</option>
               <option value="desc">Highest</option>
               <option value="def">Normal</option>
           </select>
      </div>
      {props.products.map((produc) => {
        return (
          <div key={produc.id} id="items" className="border border-1 pt-3">
            <div className="desc">
            <h4 tag="a" href="#" className="mx-5"> {produc.description} <> </> <span > ${produc.price} </span></h4>
            {/* <h3>${produc.price}</h3> */}
            </div>
            <div id="qtd1">
            <img onClick={() => handleShow(produc)} src={produc.img} alt={produc.description}></img>
          <button
            className="btn btn-secondary mx-2" 
            onClick={() => props.handleIncrement(produc)}
            > <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
          </button> 
          <button 
            className="btn btn-secondary mx-2" 
            onClick={() => props.handleDecrease(produc)}
            > <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" /> 
          </button>
          <span className="mx-5 p-3 border border-3">
            {produc.quantity}</span> quantity
          </div>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>{showImge.description}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <img src={showImge.img} width="350" alt={showImge.description} className="mx-5"/>
          <p><span className="text-dark">Ratings: </span>{showImge.ratings}/5</p>
          </Modal.Body>
          </Modal>
          </div>
        )
      }
      )}
    </div>
);
}
