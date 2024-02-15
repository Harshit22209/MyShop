package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.Product;
import com.MyShop.MyShopApplication.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface SupplierRepo extends JpaRepository<Supplier,Long> {
    @Query("SELECT s FROM Supplier s JOIN s.user u WHERE u.email = :email")
    Optional<Supplier> findByEmail(@Param("email") String email);
}
