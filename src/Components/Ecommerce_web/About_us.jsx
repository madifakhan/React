

import Navbar from "./Navbar";
import "./about.css";
const About_us = () => {
  return (
    <>
    <Navbar/>
   
     <section6 className="About_us">
        
 <h1 className="title">About<span> Us</span></h1>

<div className="container">
   <div className="images">
    <img src="about_us-rb.png" style={{height:"55vh",width:"500px"}}/>
   
   </div> 
   <div className="contents">
    <div className="p">
            <p> At [Bakery Name], our online bakery is a gateway to delight. Since [year of establishment], we've curated a selection of exquisite treats, meticulously crafted for your enjoyment. With every order, we promise not just products, but an experience that celebrates the art of baking and the joy it brings. 
            </p> <br></br>  
            <p>At [Bakery Name], convenience meets culinary excellence. Our e-commerce platform simplifies the process of indulging in our freshly baked goods. With easy browsing, secure transactions, and swift delivery, we ensure that savoring our treats is as seamless as it is satisfying.</p>
            </div>
           <button id="btn">Learn More</button>
            </div>     
               
</div>
          
       
        
     </section6>
   
   
     
    </>
  );
}

export default About_us;
