package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
