package com.dakr.binding;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class BookBinding {

	private String name;
	private Integer qty;
}
