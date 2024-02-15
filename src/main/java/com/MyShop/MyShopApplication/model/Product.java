package com.MyShop.MyShopApplication.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String img;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    private String name;
    private String Description;
    private int qty;
    private int price;
    private String category;

}
