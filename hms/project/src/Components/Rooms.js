import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Rooms(){
      let a= useNavigate()
      function handleSubmit(e){
            e.preventDefault()
            axios.get("http://localhost:8083/book/"+sessionStorage.getItem("user")+"/"+e.target.room.value).then(r=>console.log(r.data))
            a("../roombook",{replace:true})
      } 
   
          return <div className='container p-1' >
                  <h1 className='text-center mt-4 mb-4'>Book your room</h1>
                  <div className='card bg-dark text-white'>
                    <div className='card-body'>
                      <div className='row mt-4 mb-4' >
                        <div className="col text-center col-12 ">
                              <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Select Room</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                          <option name="room" id="1" value="AC">Ac Room</option>
                                          <option id="2" name="room" value="NON-AC">Non-Ac Room</option>
                                    </select>
                              </div>
                        </div>
                      </div>
                    </div>
              
                  </div>
                </div>
}
  

export default Rooms;