package com.MyShop.MyShopApplication.controller;

import com.MyShop.MyShopApplication.model.Inventory;
import com.MyShop.MyShopApplication.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000"})

public class InventoryController {
    @Autowired
    InventoryService service;
    @GetMapping("allProducts/warehouse/{warehouse_id}")
    public List<Inventory> getAllProductsOf(@PathVariable long warehouse_id){
        return service.getAllProductsOf(warehouse_id);

    }
}
