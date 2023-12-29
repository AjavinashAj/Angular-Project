package com.dakr.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class App1Controller {

	@GetMapping("/welcome")
	public String getMsg() {
		
		return "Hello Java Fullstack Developer";
	}
}
