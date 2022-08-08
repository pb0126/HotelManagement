import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "harika",
      password: "123456789"
    },
    {
      username: "harry",
      password: "12345"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  let a=useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
      axios.post("http://localhost:8083/login?username="+e.target.uname.value+"&password="+e.target.pass.value)
      .then(r=>{console.log(r.data) 
        sessionStorage.setItem("user",e.target.uname.value) }       
      );
      a("../blog",{replace:true})
  }
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className='container p-1' >
    <h1 className='text-center mt-4 mb-4'>Login here!</h1>
    <div className='card bg-dark text-white'>
      <div className='card-body'>
        <div className='row mt-4 mb-4' >
          <div className="col text-center col-12 ">
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"><h3>User Name</h3></label>
              <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" required name="uname"/>
              {renderErrorMessage("uname")}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1"> <h3>Password</h3></label>
              <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required name="pass"/>
              {renderErrorMessage("pass")}
            </div>
            <div className='mt-4'>
              <button type="submit" className="btn btn-success btn-lg btn-block mt-4 ">Log In</button>
            </div>
          </form>
          </div>
        </div>
      </div>

      <div className='card bg-dark text-center mt-4'>
        <div className='card-body'>
          <div className='row'>
             <div className='col'>
                <div>
                  <h3 className='text-center  mb-4'>OR</h3>
                  <button type="submit" className="btn btn-danger btn-lg btn-block mt-4 " >
                    <Link to="/register" style={{color:"white"}}>Register here</Link>
                  </button>
                    
                </div>
             </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;