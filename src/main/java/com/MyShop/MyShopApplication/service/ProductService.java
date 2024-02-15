package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Product;
import com.MyShop.MyShopApplication.model.Supplier;
import com.MyShop.MyShopApplication.repository.ProductRepo;
import com.MyShop.MyShopApplication.repository.SupplierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class ProductService {
    @Autowired
    private ProductRepo repo;

    @Autowired
    private SupplierRepo Srepo;

    @PostMapping("{supplier_id}/addProduct")
    public String addProduct(@RequestBody Product product,@PathVariable long supplier_id) {
        Supplier supplier=Srepo.findById(supplier_id).orElse(null);
        product.setSupplier(supplier);
        repo.save(product);
        return "added Successfuly";
    }

    @GetMapping("getAllProduct/{email}")
    public List<Product> getAllProductsBy(@PathVariable String email) {
        long supplier_id = Srepo.findByEmail(email).orElse(null).getSupplier_id();
        System.out.println(supplier_id);
        List<Product> li = repo.findProductBySupplier(supplier_id);
        System.out.println("Size: " + li.size());
        return li;
    }
    @GetMapping("getAllProducts")
    public List<Product> getAllProducts(){
        return repo.findAll();
    }

}
