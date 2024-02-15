package com.MyShop.MyShopApplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Warehouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long warehouse_id;
    private String name;
    private String area;
    private String city;
    private String state;
    private int pinCode;
    private String teleNo;
    @ManyToOne
    @JoinColumn(name = "manager_id")
    private Manager manager;

}
