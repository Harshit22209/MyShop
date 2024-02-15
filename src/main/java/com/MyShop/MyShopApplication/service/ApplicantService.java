package com.MyShop.MyShopApplication.service;

import com.MyShop.MyShopApplication.model.Applicant;
import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.repository.ApplicantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ApplicantService {
    @Autowired
    ApplicantRepo repo;
    @Autowired
    ManagerService managerService;
    public void addApplicant(Applicant applicant){
        repo.save(applicant);
    }

    public List<Applicant> getAllPendingApplicants(){

        return repo.getPendingApplicants();
    }


    public String approve( long applicant_id){
        Applicant applicant=repo.findById(applicant_id).orElse(null);
        if(applicant==null) return "failed";
        applicant.setStatus("approved");
        applicant.getUser().setType("retailManager");
        Manager manager=new Manager();
        manager.setUser(applicant.getUser());
        managerService.addManager(manager);
        repo.save(applicant);

        return "successful";
    }

}
