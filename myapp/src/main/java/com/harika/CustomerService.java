package com.harika;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerService {
@Autowired
CustomerRepo c;

public void addCustomer(Customer customer)
{
	
c.save(customer);
}
public void deleteCustomer(int id)
{
c.deleteById(id);
}
public void updateCustomer(Customer cus)
{

c.save(cus);
}
public ArrayList<Customer> getAll() {
	// TODO Auto-generated method stub
	return (ArrayList<Customer>) c.findAll();
}
public Customer get(int id) {
	// TODO Auto-generated method stub
	return c.findById(id).orElseThrow();
}
public Customer getByName(String name)
{
	return c.findByName(name).orElseThrow();
}

}