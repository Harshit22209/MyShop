package com.MyShop.MyShopApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ProductPricing {
    @Id
    @JoinColumn(name="inventory_id")
    @ManyToOne
    private Inventory inventory;
    @Id
    private LocalDate start_date;
    int price;
}
