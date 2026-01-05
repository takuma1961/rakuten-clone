package com.example.backend.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.backend.dto.CategoryResponse;
import com.example.backend.dto.ProductListResponse;
import com.example.backend.dto.ProductResponse;
import com.example.backend.model.Category;
import com.example.backend.model.Product;
import com.example.backend.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	public ProductListResponse getProducts(int page, int size) {

		// Pageable settings for product list retrieval
		// - page: zero-based page index
		// - size: number of items per page
		// - sort: id DESC (newest products first)
		PageRequest pageable = PageRequest.of(page, size, Sort.by("id").descending());

		// Fetch products as a paginated result based on the given Pageable settings
		// (page index, page size, and sort order)
		Page<Product> productPage = productRepository.findAll(pageable);

		List<ProductResponse> products = new ArrayList<>();
		for (Product product : productPage.getContent()) {
			products.add(toResponse(product));
		}
		return new ProductListResponse(products, productPage.getTotalPages());
	}

	private ProductResponse toResponse(Product product) {

		List<CategoryResponse> categories = new ArrayList<>();
		for (Category category : product.getCategories()) {
			categories.add(new CategoryResponse(category.getId(), category.getName()));
		}
		return new ProductResponse(product.getId(), product.getName(), product.getPrice(), product.getDescription(),
				categories);
	}
}
