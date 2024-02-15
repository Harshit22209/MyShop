package com.MyShop.MyShopApplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String status;

    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private LocalDate date;

    @OneToOne
    @JoinColumn(name = "email")
    private User user;

    private int attempts;


}
