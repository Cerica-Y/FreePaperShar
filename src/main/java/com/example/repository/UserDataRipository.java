package com.example.repository;

import com.example.entity.userData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDataRipository extends JpaRepository<userData, Long>{
}