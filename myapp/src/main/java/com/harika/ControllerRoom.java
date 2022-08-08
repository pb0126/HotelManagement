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
public class ControllerRoom {
@Autowired
RoomService cs;
@Autowired
CustomerService cs1;

	@PostMapping("room")
	void addRoom(@RequestBody Room c)
	{
		cs.addRoom(c);
		
	}
   @GetMapping("room")
   List getroom()
   {
	  
	   return cs.getRoom();
   }
   @GetMapping("room/{id}")
   Room getroom(@PathVariable int id)
   {
	   return cs.getRoom(id);
   }
   @PutMapping("room")
   String getroom(@RequestBody Room r)
   {
	   cs.addRoom(r);
	   return "success";
   }
   @DeleteMapping("room/{id}")
   String deleteRoom(@PathVariable int id)
   {
	   cs.deleteRoom(id);
	   return "success";
   }
   @GetMapping("book/{name}/{x}")
   Customer bookRoomAc(@PathVariable String name,@PathVariable String x)
   {
	   return cs.assignRoom(cs1.getByName(name), x);
   }
}
