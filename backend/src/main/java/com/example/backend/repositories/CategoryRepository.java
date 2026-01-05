package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
