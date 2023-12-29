package com.dakr.controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dakr.binding.ContactBinding;

@RestController
@CrossOrigin
public class ContactController {

	@PostMapping("/contact")
	public String createContact(@RequestBody ContactBinding c) {
		System.out.println(c);
		//logic to store the record
		return "Contact Saved";
	}
	
	//for returning data into table format,first form submitted data, we need to save data into 
	 // map 
	private Map<Integer ,ContactBinding> contactMap = new HashMap<>();
	@PostMapping("/contacts")
	public Collection<ContactBinding> createContact1(@RequestBody ContactBinding c1){
		System.out.println(c1);
		contactMap.put(UUID.randomUUID().hashCode(), c1);
		return contactMap.values();
	}
	
	

}
