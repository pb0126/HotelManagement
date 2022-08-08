import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-3">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 style={{textAlign:'center'}}>Contact</h1>
            <p style={{backgroundColor:'lightpink',
                       textAlign:'center',
                     }}>
              For Queries Contact:9863253781 or 9273899026
              Email:hotel123@gmail.com<br></br>
              LinkedIn:hotel356
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
