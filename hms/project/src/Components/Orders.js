import axios from "axios";
import { useNavigate } from "react-router-dom";

function Orders(){
    let a= useNavigate()
    function handleSubmit(e){
       e.preventDefault()
       axios.get("http://localhost:8083/order/"+sessionStorage.getItem("user")+"/"+e.target.food.value).then(r=>console.log(r.data))
       a("../placeorder",{replace:true})
    }
    return  <form onSubmit={handleSubmit}>
    <br></br>
    <input type="radio" name="food" id="1" value="pizza"></input>
<label htmlFor="1">Pizza(veg)</label><br></br>

<input type="radio" name="food" id="2" value="biryani"></input>
<label htmlFor="2">Biryani(veg)</label><br></br>

<input type="radio" name="food" id="3" value="roti paneer"></input>
<label htmlFor="3">Roti Paneer(veg)</label><br></br>

<input type="radio" id="4" name="food" value="pasta"></input>
<label htmlFor="4">Pasta(nonveg)</label><br></br>

<input type="radio" id="5" name="food" value="chicken biryani"></input>
<label htmlFor="5">Chicken Biryani(nonveg)</label><br></br>

<input type="radio" id="6" name="food" value="fish"></input>
<label htmlFor="6">Fish(nonveg)</label><br></br>
<button className='btn'>submit</button>
  
   </form>;
     
}
export default Orders;