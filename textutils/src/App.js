import React, { useState } from "react";
import './App.css';


function App() {  

  return (
    <>
<div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-12 mb-3">
                <h3 className="text-center">Login Form</h3>
                <form onsubmit="return submitForm();">
                    <div className="col-md mb-3">
                        <label for="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" autoComplete="off" />
                    </div>
                    <div className="col-md mb-3">
                        <label for="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" autoComplete="off" />
                    </div>
                    <button onclick="submit()" type="submit" className="btn btn-primary d-block mx-auto">Submit</button>
                </form>
                <div className="result">
                    <p> <span id="output"></span></p>
                </div>
            </div>
        </div>
    </div>

</>
   



  );
}

export default App;
