package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.Manager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ManagerRepo extends JpaRepository<Manager,Long> {
    @Query("SELECT m FROM Manager m JOIN m.user u  WHERE u.email = :email")
    Manager findByEmail(@Param("email") String email);
}
