import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img className="card-img-top" src={props.image} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">$ {props.price}/-</p>
        <button onClick={()=>{dispatch(addToCart({id:props.id, title: props.title, price:props.price}))}} className="btn btn-primary">
          Add to cart
        </button>
        <button onClick={()=>{dispatch(removeFromCart({id:props.id}))}} className="btn btn-warning">
          Remove from cart
        </button>

      </div>
    </div>
  );
};

export default Product;