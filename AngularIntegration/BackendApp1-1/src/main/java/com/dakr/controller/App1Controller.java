package com.dakr.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class App1Controller {

	@GetMapping("/welcome")
	public String getMsg() {
		
		return "Hello Java Fullstack Developer";
	}
	
	
	@GetMapping("/wish")
	public String getWishMsg() {
		String msg = "All The Best My Dear Friend...";
		return msg;
	}
}
