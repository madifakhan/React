import React from 'react';
import {Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
   
    <>



<section1 id="Header">
<nav className="navbar1">
    <Link to="/"><li>Home</li></Link>
    <Link to="/about_us"><li>About</li></Link>
    <Link to="/menu"><li>Menu</li></Link>
    <Link to="/cake"><li>Cake</li></Link>
    </nav>
   <img src="logo1.png" />
    <nav className="navbar2">
   
    <Link to="/cheese_cake"><li>Cheese cake</li></Link>
    <Link to="/contact"><li>Contact</li></Link>
    </nav>
  <div className="icons">
        <div className="search-icon"> <i class="fa fa-search"/></div>
        <div className="cart-icon"><i class="fa fa-shopping-bag"/></div>

        
    
        </div>


</section1>



   







  </>
  );
}

export default Navbar;

