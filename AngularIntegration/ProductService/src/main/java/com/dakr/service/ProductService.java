package com.dakr.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dakr.model.Product;

@Service
public interface ProductService {
	
public List<Product>findAll();

public Product findByName(String pname);

public Product saveProduct(Product p);

public Product updateProduct(int pid, Product p);

public String deleteProduct(int pid);
}
