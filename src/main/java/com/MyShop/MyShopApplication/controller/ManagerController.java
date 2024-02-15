package com.MyShop.MyShopApplication.controller;

import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.model.Warehouse;
import com.MyShop.MyShopApplication.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000"})
public class ManagerController {
    @Autowired
    ManagerService service;
    @GetMapping("allManagers")
    List<Manager> getAllManagers(){
        return service.getAllManagers();
    }

    @GetMapping("retailManager/{email}")
    Manager getRetailManager(@PathVariable String email){
        return service.getManagerFromEmail(email);
    }


}
