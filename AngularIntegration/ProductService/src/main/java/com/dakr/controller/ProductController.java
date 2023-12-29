package com.dakr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dakr.model.Product;
import com.dakr.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService service;

	@GetMapping("/findall")
	public List<Product> findAll() {
		return service.findAll();
	}

	public Product findByName(@PathVariable String pname) {
		return service.findByName(pname);
	}

}
