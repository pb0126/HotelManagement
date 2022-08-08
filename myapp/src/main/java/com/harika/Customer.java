package com.harika;

import java.util.ArrayList;



import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Customer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
int id;
String name;
long contactNumber;
String address;
String password;
@OneToMany(mappedBy="customer",cascade= {CascadeType.PERSIST,CascadeType.MERGE })
List<Room> room=new ArrayList<>();

@ManyToMany(mappedBy="customer",cascade= {CascadeType.PERSIST,CascadeType.MERGE })

List<Food> food=new ArrayList<>();

public List<Food> getFood() {
	return food;
}
public void addFood(Food food) {
	this.food.add(food);
	food.getCustomer().add(this);
	
}
public Customer()
{
	
}
public Customer( String name, long contactNumber, String address, String password) {
	super();
	
	this.name = name;
	this.contactNumber = contactNumber;
	this.address = address;
	this.password = password;
	
}
public Customer( String name, long contactNumber, String address, String password, List<Room> room) {
	super();
	
	this.name = name;
	this.contactNumber = contactNumber;
	this.address = address;
	this.password = password;
	this.room = room;
}
public List<Room> getRoom() {
	return room;
}
public void addRoom(Room room) {
	this.room.add(room);
	room.setCustomer(this);//adds cust id
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
public long getContactNumber() {
	return contactNumber;
}
public void setContactNumber(long contactNumber) {
	this.contactNumber = contactNumber;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}

}