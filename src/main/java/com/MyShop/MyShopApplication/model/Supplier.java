package com.MyShop.MyShopApplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long supplier_id;

    @OneToOne
    @JoinColumn(name = "email")
    private  User user;

    private long totalSale;
    private  int returns;
    private int rating;




}
