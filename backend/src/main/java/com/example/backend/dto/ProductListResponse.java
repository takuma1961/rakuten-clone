package com.example.backend.dto;

import java.util.List;

public class ProductListResponse {

	private List<ProductResponse> data;
	private int totalPages;

	public ProductListResponse(List<ProductResponse> data, int totalPages) {
		this.data = data;
		this.totalPages = totalPages;
	}

	public List<ProductResponse> getData() {
		return data;
	}

	public int getTotalPages() {
		return totalPages;
	}
}
