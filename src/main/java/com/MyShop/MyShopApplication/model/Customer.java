package com.MyShop.MyShopApplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customer_id;
    @OneToOne
    @JoinColumn(name = "email")
    private  User user;
    private int spendings;
}
