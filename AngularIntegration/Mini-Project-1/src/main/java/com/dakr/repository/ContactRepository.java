package com.dakr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dakr.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer>{

}
