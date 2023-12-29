package com.dakr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dakr.binding.BookBinding;
import com.dakr.entity.Book;
import com.dakr.repository.BookRepo;

import ch.qos.logback.core.joran.util.beans.BeanUtil;

@Service
public class BookServiceImp implements BookService{
     
	@Autowired
	private BookRepo repo;
	
	

	@Override
	public String saveD(BookBinding b) {
		Book b1=new Book();
		BeanUtils.copyProperties(b, b1);
		System.out.println(b);
		repo.save(b1);
		return "book saved";
	}



	@Override
	public Book getBook(String name) {
		
		return repo.findByName(name);
	}



	@Override
	public List<Book> getBooks() {
		
		return repo.findAll();
	}

}
