import React from 'react';
import "./contact.css";
import Navbar from './Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
       <section id="Contact">
<div class="cont">
    <div className="title">
    <h3>Contact <span>Us</span></h3>
    </div>
    <form>
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email"/>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
    </form>
</div>
</section>






</>

   
  );
}

export default Contact;
