package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Applicant;
import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.model.Supplier;
import com.MyShop.MyShopApplication.model.User;
import com.MyShop.MyShopApplication.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@Service
@RestController
@CrossOrigin(origins={"http://localhost:3000"})
public class UserService {
    @Autowired
    UserRepo userRepo;
   @Autowired
   SupplierService supplierService;

   @Autowired
   ManagerService managerService;
   @Autowired
    ApplicantService applicantService;
    public User addUser( User user){
        if(userRepo.findById(user.getEmail()).orElse(null)!=null)
            return null;

        userRepo.save(user);
        System.out.println(user.getType());
        if(user.getType().equals("supplier")){
            Supplier supplier=new Supplier();
            supplier.setUser(user);
            supplierService.addSupplier(supplier);
        }
        else if(user.getType().equals("applicant")){
            System.out.println("I am at applicant");
            Applicant applicant=new Applicant();
            applicant.setUser(user);
            applicant.setDate(LocalDate.now());
            applicant.setStatus("pending");
            applicantService.addApplicant(applicant);
        }
        else{
            //For Customer
        }
        return user;


    }

    public User getUser(String email){

        return userRepo.findById(email).orElse(null);
    }
}
