import React from 'react';

import "./cake.css";
import Navbar from './Navbar';

const Cakes = () => {
  return (
   
    <>

     <Navbar/>

<section className="cakes"  id="cakes">

<h3 className="title">Our<span> Cakes</span></h3>
<div className="wrapper">
    {/* cake one */}
    <div className="cake-card">
    <img src="choco_cake.jpg" />
        <h3>Chocolate Cake</h3>
        <div className="price">$22.99/-</div>
        <button className='button'>Add to cart</button>
    </div>


    {/* cake two */}
    <div className="cake-card">
   <img src="ice_cake.jpg" />
        <h3>Ice Cake</h3>
        <div className="price">$10.99/-<span>15.99</span></div>
        <button className='button'>Add to cart</button>
    </div>

    {/* cake three */}
    <div className="cake-card">
 <img src="pineapple_cake.png" />
        <h3>Pineapple Cake</h3>
        <div className="price">$22.99/-</div>
        <button className='button'>Add to cart</button>
    </div>

    {/* cake four */}
    <div className="cake-card">
    <img src="Wedding_cake.jpg" />
        <h3>Wedding Cake</h3>
        <div className="price">$399.99/- <span>599.99/-</span></div>
        <button className='button'>Add to cart</button>
    </div>

    {/* cake five */}
    <div className="cake-card">
    <img src="waffle_cake.jpg" />
        <h3>Waffle Cake</h3>
        <div className="price">$22.99/-</div>
        <button className='button'>Add to cart</button>
    </div>
     {/* cake six */}
    <div className="cake-card">
    <img src="rec_cake.jpg" />
        <h3>Recberry Cake</h3>
        <div className="price">$22.99/-</div>
        <button className='button'>Add to cart</button>
    </div>
</div>

</section>

    </>
  );
}

export default Cakes;
