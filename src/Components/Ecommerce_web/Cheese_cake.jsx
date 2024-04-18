import React from 'react';
import Navbar from './Navbar';
import "./cheese_cake.css";

const Cheese_cake = () => {
  return (
    <>

    <Navbar />
    <section className="cheese-cake" id="cheese">


       <h1 className="title">our <span>Cheese cake</span></h1>
       <div className="wrapper">
        {/* cheese cake 1 */}
        <div className="cheese_card">
            <div className="icons">
                <a className='fas fa-shopping-cart'></a>
                <a className='fas fa-heart'></a>
                <a className='fas fa-eye'></a>
            </div>
            <div className="img">
                <img src="Mango_cheese_cake.jpg"/>
            </div>
            <div className="content">
                <h3>Mango cheese cake</h3>
                <div className="stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
                <div className="price">$15.99/- <span>$20.99</span>
                </div>
            </div>

        </div>

{/* cheese cake 2 */}

        <div className="cheese_card">
            <div className="icons">
                <a className='fas fa-shopping-cart'></a>
                <a className='fas fa-heart'></a>
                <a className='fas fa-eye'></a>
            </div>
            <div className="img">
                <img src="baked_cheese_cake.jpg"/>
            </div>
            <div className="content">
                <h3>baked cheese cake</h3>
                <div className="stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
                <div className="price">$15.99/- <span>$20.99</span>
                </div>
            </div>

        </div>

        {/* cheese cake 3 */}
        <div className="cheese_card">
            <div className="icons">
                <a className='fas fa-shopping-cart'></a>
                <a className='fas fa-heart'></a>
                <a className='fas fa-eye'></a>
            </div>
            <div className="img">
                <img src="fruity_cheese-cake.jpg"/>
            </div>
            <div className="content">
                <h3>fruity summer cheese cake</h3>
                <div className="stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                </div>
                <div className="price">$15.99/- <span>$20.99</span>
                </div>
            </div>

        </div>

       </div>
    </section>
    </>
  );
}

export default Cheese_cake;
