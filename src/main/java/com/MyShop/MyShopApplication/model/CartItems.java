package com.MyShop.MyShopApplication.model;

import com.MyShop.MyShopApplication.ComposityKeys.CartKey;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(CartKey.class)
public class CartItems {
    @JoinColumn(name="customer_id")
    @ManyToOne
    @Id
    private Customer customer;
    @JoinColumn(name="inventory_id")
    @ManyToOne
    @Id
    private Inventory inventory;
    private int qty;
}
