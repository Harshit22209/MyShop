package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.Inventory;
import com.MyShop.MyShopApplication.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface InventoryRepo extends JpaRepository<Inventory, Long> {
    @Query("SELECT s FROM Inventory s  WHERE s.warehouse.warehouse_id = :warehouse_id")
    List<Inventory> findInventoryItemsIn(@Param("warehouse_id") long warehouse_id);
}
