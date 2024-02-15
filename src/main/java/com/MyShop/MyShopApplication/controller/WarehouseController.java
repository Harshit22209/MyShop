package com.MyShop.MyShopApplication.controller;

import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.model.Relations.Manage;
import com.MyShop.MyShopApplication.model.Warehouse;
import com.MyShop.MyShopApplication.service.ManageService;
import com.MyShop.MyShopApplication.service.ManagerService;
import com.MyShop.MyShopApplication.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000"})
public class WarehouseController {
    @Autowired
    private WarehouseService service;

    @Autowired
    private ManagerService managerService;

    @Autowired
    private ManageService manageService;
    @GetMapping("admin/allWarehouses")
    public List<Warehouse> getAllWarehouses(){
        return service.getAllWarehouses();
    }
    @PostMapping("admin/addWarehouse")
    public void addWarehouse(@RequestBody Warehouse warehouse){
        service.addWarehouse(warehouse);
    }
    @PutMapping("admin/changeManager/{manager_id}/{warehouse_id}")
    public void changeManager(@PathVariable long manager_id, @PathVariable long warehouse_id){
        Warehouse warehouse=service.getWarehouse(warehouse_id);

        Manager manager1=managerService.getManager(manager_id);

        if(warehouse.getManager()!=null){

        }
        else{
            warehouse.setManager(manager1);
            service.updateWarehouse(warehouse);
            Manage manage=new Manage(manager1,warehouse, LocalDate.now());
            manageService.addEntry(manage);

        }

     }
    @GetMapping("retailManager/warehouses/{manager_id}")
    public List<Warehouse> getAllWarehousesOf(@PathVariable long manager_id){
        return service.getAllWarehouseOf(manager_id);
    }
     @PutMapping("admin/changeManager/remove/{warehouse_id}")
     public void removeManager(@PathVariable long warehouse_id){

     }
}
