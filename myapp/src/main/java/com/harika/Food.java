package com.harika;

import javax.persistence.CascadeType;


import javax.persistence.Entity;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Food {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
String name;
String type;
@ManyToMany(cascade= {CascadeType.ALL})
@JsonIgnore
 List<Customer> customer=new ArrayList<>();
	public List<Customer> getCustomer() {
	return customer;
}
public void addCustomer(Customer customer) {
	this.customer.add(customer);
}
	protected Food() {
}	
	public Food( String name, String type) {
		super();
		
		this.name = name;
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

}