package com.harika;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class ControllerFood {
@Autowired
FoodService cs;
@Autowired
CustomerService cs1;
	@PostMapping("food")
	void addFood(@RequestBody Food c)
	{
		cs.addFood(c);
		
	}
   @GetMapping("food")
   List getfood()
   {
	  
	   return cs.getFood();
   }
   @GetMapping("food/{id}")
   Food getfood(@PathVariable int id)
   {
	   return cs.getFood(id);
   }
   @PutMapping("food")
   String getfood(@RequestBody Food r)
   {
	   cs.addFood(r);
	   return "success";
   }
   @DeleteMapping("food/{id}")
   String deleteFood(@PathVariable int id)
   {
	   cs.deleteFood(id);
	   return "success";
   }
   @GetMapping("order/{name}/{food}")
   Customer orderFood(@PathVariable String name,@PathVariable String food)
   {
	  
	   return cs.orderFood(cs1.getByName(name), food);
   }
   
}