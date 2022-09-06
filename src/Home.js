import React from "react";
import List from "./List";
import "./Home.css";
import Icon from './Icon.png'
import {Link} from 'react-router-dom'
import CartContext from './Contextprovider'
import { useContext } from "react";

const Home = () => {
  const {items}=useContext(CartContext)
 
  return (
    <>
     <div className="logo">
     <h1>Shooping cart</h1>
     <div className="lg">
     <Link to="/shopping"><img src={Icon} alt="logomate"/></Link>
     <span>{items.length}</span>
     </div>
    
     </div>
     <div className="items">
        <List
          src="https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=400"
          title="mini bag"
          price="20$"
        />
        <List
          src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Laptop"
          price="2000$"
        />
        <List
          src="https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=400"
          title="Coffee cup"
          price="4$"
        />
        <List
          src="https://images.pexels.com/photos/5477263/pexels-photo-5477263.jpeg?auto=compress&cs=tinysrgb&w=400"
          title="Nescafe pack"
          price="8$ only"
        />
        <List
          src="https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Airpod Pro"
          price="200$"
        />
        <List
          src="https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=400"
          title="Addidas Football"
          price="20$ only"
        />
      </div>
    </>
  );
};

export default Home;
