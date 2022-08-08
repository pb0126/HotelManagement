import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
           
          </div>
          <div class="col-lg-5">
          <div class style={{backgroundImage:"url('https://m.economictimes.com/thumb/msid-86469051,width-1254,height-836,resizemode-4,imgsize-28786/indian-hotels.jpg')", position: 'fixed'}}></div>

            <h1
        style={{
          textAlign:'center',
          color: 'black',
        }}
      >
        Home Page
      </h1>

            <p style={{backgroundColor:'coral',
                       textAlign:'center',
                     }}><b>WELCOME!</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
