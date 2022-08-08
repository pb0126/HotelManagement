package com.harika;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class RoomService {
@Autowired
RoomRepo c;
public void addRoom(Room r)
{
c.save(r);
}
public Room getRoom(int id)
{
	return c.findById(id).orElseThrow();
}
public List getRoom()
{
	return c.findAll();
}

public void deleteRoom(int id)
{
c.deleteById(id);
}
public void updateRoom(int id)
{
	c.save(c.findById(id).orElseThrow());
}
public Customer assignRoom(Customer cus,String x)
{
	ArrayList<Room> a=(ArrayList<Room>) c.findByRoomType(x);
	for(Room r:a)
	{
		if(r.getCustomer()==null)
		{
			r.setCustomer(cus);
			c.save(r);
		}
	}
	
	return cus;
}

}