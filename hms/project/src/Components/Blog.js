import React, {Component} from 'react';
import {Link} from "react-router-dom";



 export default class Blog extends Component {
  
    render() {
      
      return <div className='container p-4'>
              <h4>Welcome User!</h4>
              
              <hr className='' style={{background:"#000"}}/>

              <h1 className='text-center mt-4 mb-4 p-4'>Actions</h1>

              <div className="row text-center">
                
                <div className="col p-3 bg-danger text-white  card col-12 col-sm-6 p-4  mb-4">
                  <div className='card-body'>
                    <Link to="/rooms" style={{color:'white'}}>
                      <h2 className='font-weight-bold '>Room</h2>
                      <h5 className=''>Book room of your choice</h5>
                    </Link>
                  </div>
                </div>
                
                
                <div className="col p-3 bg-dark text-white  card col-12 col-sm-6 p-4  mb-4">
                  <div className='card-body'>
                    <Link to="/orders" style={{color:'white'}}>

                      <h2 className='font-weight-bold '>Restaurant</h2>
                      <h5 className=''>Order food from the wide range menu</h5>
                    </Link>
                  </div>
                </div>
                
                <div className="col p-3 bg-success text-white  card col-12 col-sm-6 p-4  mb-4">
                  <div className='card-body'>
                    <Link to="/about" style={{color:'white'}}>

                      <h2 className='font-weight-bold '>About</h2>
                      <h5 className=''>Know more about us here.</h5>
                    </Link>
                  </div>
                </div>

                <div className="col p-3 bg-dark text-white  card col-12 col-sm-6 p-4  mb-4">
                  <div className='card-body'>
                    <Link to="/contact" style={{color:'white'}}>

                      <h2 className='font-weight-bold '>Contact us</h2>
                      <h5 className=''>Feel free to contact us, we are happy to help!</h5>
                    </Link>
                  </div>
                </div>
                
              </div>
            </div>
    }
  }
