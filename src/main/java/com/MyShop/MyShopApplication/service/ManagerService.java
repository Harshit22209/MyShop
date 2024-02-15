package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.repository.ManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerService {
    @Autowired
    ManagerRepo repo;
    public void addManager(Manager manager){
        repo.save(manager);
    }
    public List<Manager> getAllManagers(){
        return repo.findAll();
    }
    public Manager getManager(long manager_id){
        return repo.findById(manager_id).orElse(null);
    }

    public Manager getManagerFromEmail(String email) {
        return repo.findByEmail(email);
    }
}
