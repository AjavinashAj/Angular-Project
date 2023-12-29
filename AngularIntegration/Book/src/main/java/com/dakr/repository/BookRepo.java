package com.dakr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dakr.entity.Book;
@Repository
public interface BookRepo extends JpaRepository<Book, Integer>{

	Book findByName(String name);

}
