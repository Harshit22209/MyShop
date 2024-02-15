package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Inventory;
import com.MyShop.MyShopApplication.repository.InventoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class InventoryService {
    @Autowired
    InventoryRepo repo;
    public List<Inventory> getAllProductsOf(long warehouse_id){
        return repo.findInventoryItemsIn(warehouse_id);

    }
}
