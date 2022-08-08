package com.harika;

import javax.persistence.CascadeType;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Room  {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
int id;
String roomType;
double price;
@ManyToOne(cascade= {CascadeType.PERSIST,CascadeType.MERGE})
@JsonIgnore
Customer customer;



protected Room() {
}
public Room( String roomType, double price, Customer customer) {
	super();
	
	this.roomType = roomType;
	this.price = price;
	this.customer = customer;
}
public Room( String roomType, double price) {
	super();
	
	this.roomType = roomType;
	this.price = price;
	
}

public Customer getCustomer() {
	return customer;
}
public void setCustomer(Customer customer) {
	this.customer = customer;
}

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getRoomType() {
	return roomType;
}
public void setRoomType(String roomType) {
	this.roomType = roomType;
}
public double getPrice() {
	return price;
}
public void setPrice(double price) {
	this.price = price;
}
}