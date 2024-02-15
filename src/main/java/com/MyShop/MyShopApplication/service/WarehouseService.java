package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Warehouse;
import com.MyShop.MyShopApplication.repository.WarehouseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseService {
    @Autowired
    private WarehouseRepo repo;
    public List<Warehouse> getAllWarehouses(){
        return repo.findAll();
    }
    public void addWarehouse(Warehouse warehouse){
        repo.save(warehouse);
    }
    public void updateWarehouse(Warehouse warehouse){
        repo.save(warehouse);
    }
    public Warehouse getWarehouse(long warehouse_id){
        return repo.findById(warehouse_id).orElse(null);
    }

    public List<Warehouse> getAllWarehouseOf(long manager_id){
        return repo.getWarehousesByAdmin(manager_id);
    }
}
