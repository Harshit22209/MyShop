package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Supplier;
import com.MyShop.MyShopApplication.repository.SupplierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Service
@RestController
@CrossOrigin(origins={"http://localhost:3000"})
public class SupplierService {
    @Autowired
    private SupplierRepo repo;
    @GetMapping("supplier/{email}")
    public Supplier getSupplier(@PathVariable String email){
        return repo.findByEmail(email).orElse(null);
    }

    public void addSupplier(Supplier supplier){
        repo.save(supplier);
    }
}
