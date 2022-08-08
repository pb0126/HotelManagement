package com.harika;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepo extends JpaRepository<Food,Integer> {
Optional<Food> findByName(String food);
} 