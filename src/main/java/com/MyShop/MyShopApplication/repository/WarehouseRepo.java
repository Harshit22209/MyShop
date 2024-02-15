package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.model.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WarehouseRepo extends JpaRepository<Warehouse,Long> {
    @Query("SELECT w FROM Warehouse w JOIN manager m WHERE m.manager_id = :manager_id")
     List<Warehouse> getWarehousesByAdmin(@Param("manager_id") long manager_id);
}
