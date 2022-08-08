import React, { useState } from "react";
import {  Alert } from "react-bootstrap";
import Login from "./Login";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Registration() {
 
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  

 let a= useNavigate()
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(e.target.name.value)
       axios.post("http://localhost:8083/customer",{name:e.target.name.value,
       address:e.target.address.value,
       password:e.target.password.value,
       contactNumber:e.target.contactNumber.value
      })
      a("../login",{replace:true})
    }
   

  function handleClick() {
    setLogin(!login);
  }  

  return (
    <>
        <div className='container p-1' >
        <h1 className='text-center mt-4 mb-4'>Create an Account</h1>
        <div className='card bg-dark text-white'>
          <div className='card-body'>
            <div className='row mt-4 mb-4' >
              <div className="col text-center col-12 ">
                {" "}
                {login ? (
                  <form className="text-center" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1"><h3> Name</h3></label>
                      <input type="text" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Enter your name" name="name" onChange={(event) => setName(event.target.value)} />
                      
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="exampleInputPassword1"> <h3>Password</h3></label>
                      <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" name="password"
                      onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="form-group">
                      <label><h3> Address</h3></label>
                      <input type="text" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Enter Address" name="address"
                        onChange={(event) => setAddress(event.target.value)} />
                      
                    </div>
                    <div className="form-group">
                      <label ><h3> Contact Number</h3></label>
                      <input type="text" className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Enter Mobile Number" name="contactNumber"
                      onChange={(event) => setPhone(event.target.value)} />
                      
                    </div>
                    <div className='mt-4'>
                      <button type="submit" className="btn btn-success btn-lg btn-block mt-4 ">Register</button>
                    </div>

                    <p onClick={handleClick} className="forgot-password text-right">
                    Already registered{" "}log in?
                    
                    </p>
                    {flag && (
                      <Alert color="primary" variant="danger">
                        I got it you are in hurry! But every Field is important!
                      </Alert>
                    )}
                  </form>
                ) : (
                  <Login />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
  
}

export default Registration;