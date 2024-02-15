package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Relations.Manage;
import com.MyShop.MyShopApplication.repository.ManageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManageService {
    @Autowired
    ManageRepo repo;
    public void addEntry(Manage manage){
        repo.save(manage);
    }

}
