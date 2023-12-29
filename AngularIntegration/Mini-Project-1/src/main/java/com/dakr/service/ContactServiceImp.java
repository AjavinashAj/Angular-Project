package com.dakr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dakr.binding.ContactBinding;
import com.dakr.model.Contact;
import com.dakr.repository.ContactRepository;
@Service
public class ContactServiceImp implements ContactService{
	
	@Autowired
	private ContactRepository repo;

	@Override
	public String saveContact(ContactBinding form) {
		
		Contact entity=new Contact();
		BeanUtils.copyProperties(form, entity);
		
				repo.save(entity);
				return "contact save successfully..";
	}

	@Override
	public List<Contact> getAllContacts() {
		
		return repo.findAll();
	}

	@Override
	public String updateContact(ContactBinding form) {
		
		Contact entity=new Contact();
		BeanUtils.copyProperties(form, entity);
		
				repo.save(entity);
		return "Contact updated.. ";
	}

	@Override
	public String deleteContactById(Integer contactId) {
		repo.deleteById(contactId);
		return "Contact deleted...";
	}

	@Override
	public Optional<Contact> findContactById(Integer contactId) {
		
		return repo.findById(contactId);
	}

	

}
