package com.MyShop.MyShopApplication.model.Relations;

import com.MyShop.MyShopApplication.ComposityKeys.B2COrderKey;
import com.MyShop.MyShopApplication.model.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(B2COrderKey.class)
public class B2C_orders {
    @Id
    @JoinColumn(name="trans_id")
    @ManyToOne
    private Transactions transaction;

    @Id
    @JoinColumn(name="inventory_id")
    @ManyToOne
    private Inventory inventory;

    @Id
    @ManyToOne
    @JoinColumn(name="customer_id")
    private Customer customer;

    private int qty;
    private int total_amt;
    public B2C_orders(Transactions transaction, Inventory inventory, Customer customer){
        this.transaction=transaction;
        this.inventory=inventory;
        this.customer=customer;
    }
}
