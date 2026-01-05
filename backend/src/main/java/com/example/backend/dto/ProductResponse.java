package com.example.backend.dto;

import java.math.BigDecimal;
import java.util.List;

public class ProductResponse {

	public ProductResponse(Long objectID, String name, BigDecimal price, String description,
			List<CategoryResponse> categories) {
		this.objectID = objectID;
		this.name = name;
		this.price = price;
		this.description = description;
		this.categories = categories;
	}

	private Long objectID;
	private String name;
	private BigDecimal price;
	private String description;
	private List<CategoryResponse> categories;
}
