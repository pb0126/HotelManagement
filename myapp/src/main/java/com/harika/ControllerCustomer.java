package com.harika;

import java.util.ArrayList;




import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class ControllerCustomer {
@Autowired
CustomerService cs;

	@PostMapping("customer")
	void register(@RequestBody Customer c)
	{
		cs.addCustomer(c);
	}
    @PostMapping("login")
    String login(@RequestParam("username")String username , @RequestParam("password")String password)
    {
    	ArrayList<Customer> a=cs.getAll();
    	for(Customer c:a)
    	{
    		if(c.getName().equals(username) && c.getPassword().equals(password))
    		{
    			return "true";
    		}
    			
    	}
    	return "false";
    }
   
   @GetMapping("customer")
   ArrayList<Customer> getCustomers()
   {
	  
	   return cs.getAll();
   }

   @GetMapping("customer/{id}")
   Customer getCustomer(@PathVariable int id)
   {
	   return cs.get(id);
   }
   @DeleteMapping("customer/{id}")
   void deleteCustomer(@PathVariable int id)
   {
	    cs.deleteCustomer(id);
   }
   @PutMapping("customer")
   void updateCustomer(@RequestBody Customer c)
   {
	   cs.updateCustomer(c);
   }
}