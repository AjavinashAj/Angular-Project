package com.dakr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dakr.binding.ContactBinding;
import com.dakr.model.Contact;
import com.dakr.service.ContactService;

@RestController
@CrossOrigin
public class ContactController {
	
	@Autowired
	private ContactService service;
	
	//POST => http://localhost:9090/save/
	@PostMapping("/save")
	public String createContact(@RequestBody ContactBinding c) {
		
		String status = service.saveContact(c);
		return status;
	}
	
	
	
	@GetMapping("/retrive/{contactId}")
	public Optional<Contact> findContactbyId(@PathVariable Integer contactId) {
		return service.findContactById(contactId);
	}
	
	//GET => http://localhost:9090/retriveAll/
	@GetMapping("/retriveAll")
	public List<Contact> getAllContacts(){
		
		return service.getAllContacts();
	}
	
	//PUT =>http://localhost:9090/update
	@PutMapping("/update")
	public String updateContact(@RequestBody ContactBinding c) {
		
		return service.updateContact(c);
	}
	
	//DELETE => http://localhost:9090/delete/101
	
	@DeleteMapping("/delete/{contactId}")
	public String deleteContact(@PathVariable Integer contactId) {
		return service.deleteContactById(contactId);
	}

}
