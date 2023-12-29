package com.dakr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dakr.binding.BookBinding;
import com.dakr.entity.Book;
import com.dakr.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	private BookService service;
	
	@PostMapping("/save")
	public String saveData(@RequestBody BookBinding b) {
		return service.saveD(b);
	}
	
	@GetMapping("/retrive")
	public Book getBook(@RequestParam String name)
	{
		return service.getBook(name);
	}
	
	@GetMapping("/retriveAll")
	public List<Book> getAll(){
		
		return service.getBooks();
	}
	

}
