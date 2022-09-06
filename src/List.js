import React from "react";
import './List.css'
import CartContext from './Contextprovider'
import { useContext } from "react";

const List = ({ price, title, src }) => {
  const{addtocart}=useContext(CartContext)
  return (
    <div className=" List ">
      <img className="images" src={src} alt="logomate"></img>
      <h4>produt: {title}</h4>
      <h6>price: {price}</h6>
      <div className="btnclass">
      <button className="btn" onClick={()=>addtocart({title,price})}>Add to cart</button>
      <button className="btn">Purchase!</button>
      </div>
      
    </div>
  );
};

export default List;
