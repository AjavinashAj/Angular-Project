package com.dakr.service;

import java.util.List;
import java.util.Optional;

import com.dakr.binding.BookBinding;
import com.dakr.entity.Book;

public interface BookService {

	String saveD(BookBinding b);

	Book getBook(String name);

	List<Book> getBooks();

}
