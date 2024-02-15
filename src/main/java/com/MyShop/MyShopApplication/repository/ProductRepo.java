package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.Product;
import com.MyShop.MyShopApplication.model.Supplier;
import com.MyShop.MyShopApplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Product,Long> {
    @Query("SELECT s FROM Product s  WHERE s.supplier.supplier_id = :supplier_id")
    List<Product> findProductBySupplier(@Param("supplier_id") long supplier_id);

}
