import React from "react";
import "./home.css";
// import Navbar from "./Navbar";





const Home = () => {
  return (
   
<>

      <div className="home-section">
        <br></br>

        <div className="intro">
           
         <h1>
    
            <marquee
              behavior="alternate"
              direction="left"
              scrollamount="2"
             
            >
                   Welcome to Sweet Cravings Bakehouse
            </marquee>
         
        </h1>

        <h2>
         
            <marquee
              behavior="alternate"
              direction="right"
              scrollamount="2"
              >
              "Crafted with love, our bakery treats sweeten every moment"
            </marquee>
           
        </h2> 
        </div>
        <div className="btn">
         
        <a href="http://localhost:5173/menu" id="button">Order Now</a>
        </div>
        </div>
  
     
    </>
  );
};

export default Home;
