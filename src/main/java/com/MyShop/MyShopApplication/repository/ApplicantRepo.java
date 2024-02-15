package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ApplicantRepo extends JpaRepository<Applicant,Long> {
    @Query("SELECT a FROM Applicant a WHERE a.status = 'pending'")
    List<Applicant> getPendingApplicants();

}
