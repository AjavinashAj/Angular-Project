package com.dakr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.dakr.binding.ContactBinding;
import com.dakr.model.Contact;


public interface ContactService {

	String saveContact(ContactBinding c);

	List<Contact> getAllContacts();

	String updateContact(ContactBinding c);

	String deleteContactById(Integer contactId);

	Optional<Contact> findContactById(Integer contactId);

	

}
