package com.MyShop.MyShopApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
    @Id
    private String email;
    private String name;
    private String contactNo;
    private String type;
    private String area;
    private String state;
    private String city;
    private int pincode;
    private String password;
}
