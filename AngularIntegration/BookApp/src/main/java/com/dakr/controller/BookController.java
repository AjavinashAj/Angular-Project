package com.dakr.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BookController {

	@GetMapping("/books")
	public String getMsg() {
		
		return "welcome India";
	}

}
