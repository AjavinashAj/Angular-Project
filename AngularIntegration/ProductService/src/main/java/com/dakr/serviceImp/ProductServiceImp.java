package com.dakr.serviceImp;

import java.util.List;

import com.dakr.model.Product;
import com.dakr.repository.ProductRepository;

public class ProductServiceImp {

	private ProductRepository repo;

	public List<Product> findAll() {

		List<Product> r = repo.findAll();
		return r;
	}

	public Product findByName(String pname) {

		return repo.findByPname(pname).orElseThrow(() -> new RuntimeException("No product found"));
	}

	public Product saveProduct(Product p) {
		return repo.save(p);
	}

	public Product updateProduct(int pid, Product p) {

		Product existing = repo.findById(pid)
				.orElseThrow(() -> new RuntimeException("No Product available with id:" + pid));

		if (p.getPname() != null)
			existing.setPname(p.getPname());
		if (p.getPrice() != null)
			existing.setPrice(p.getPrice());
		if (p.getQuantity() != null)
			existing.setQuantity(p.getQuantity());

		return repo.save(existing);
	}

	public String deleteProduct(int pid) {

		Product existing = repo.findById(pid)
				.orElseThrow(() -> new RuntimeException("No product available with id::" + pid));
		repo.deleteById(pid);
		return "Product deleted successfully...";
	}

}
