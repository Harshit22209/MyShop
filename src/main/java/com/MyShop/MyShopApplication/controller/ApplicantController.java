package com.MyShop.MyShopApplication.controller;

import com.MyShop.MyShopApplication.model.Applicant;
import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.repository.ManagerRepo;
import com.MyShop.MyShopApplication.service.ApplicantService;
import com.MyShop.MyShopApplication.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins={"http://localhost:3000"})

public class ApplicantController {
    @Autowired
    ApplicantService service;

    @GetMapping("pendingApplications")
    List<Applicant> getAllPendingApplicants(){
        return service.getAllPendingApplicants();
    }
    @PutMapping("approve/{applicant_id}")
    String approve(@PathVariable long applicant_id){
        System.out.println(applicant_id);
        return service.approve(applicant_id);
    }
}
