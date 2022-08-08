package com.harika;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;

@Component
public class FoodService {
@Autowired
FoodRepo c;
public void addFood(Food r)
{
c.save(r);
}
public List getFood()
{

	return c.findAll();
}
public Food getFood(int id)
{
	return c.findById(id).orElseThrow();
}
public void deleteFood(Food r)
{
c.delete(r);
}
public void updateFood(int id)
{
	c.save(c.findById(id).orElseThrow());
}
public void deleteFood(int id)
{
	c.deleteById(id);
}
public Customer orderFood(Customer cus,String food)
{
	Food f=c.findByName(food).orElseThrow();
	f.addCustomer(cus);
	c.save(f);
	return cus;
}
}