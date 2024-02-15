package com.MyShop.MyShopApplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long inventory_id;

    @ManyToOne
    @JoinColumn(name="warehouse_id")
    private Warehouse warehouse;


    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    private int qty;



}
