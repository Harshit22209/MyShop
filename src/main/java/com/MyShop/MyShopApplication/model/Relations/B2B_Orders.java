package com.MyShop.MyShopApplication.model.Relations;

import com.MyShop.MyShopApplication.ComposityKeys.B2BOrderKey;
import com.MyShop.MyShopApplication.ComposityKeys.ManageKey;
import com.MyShop.MyShopApplication.model.Product;
import com.MyShop.MyShopApplication.model.Supplier;
import com.MyShop.MyShopApplication.model.Transactions;
import com.MyShop.MyShopApplication.model.Warehouse;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(B2BOrderKey.class)
public class B2B_Orders {
    @JoinColumn(name="trans_id")
    @ManyToOne
    @Id
    private Transactions transaction;

    @JoinColumn(name="warehouse_id")
    @ManyToOne
    @Id
    private Warehouse warehouse;

    @JoinColumn(name="product_id")
    @ManyToOne
    @Id
    private Product product;

    private int qty;
    private int total_amt;

    public B2B_Orders(Transactions transaction,Warehouse warehouse,Product product){
        this.warehouse=warehouse;
        this.transaction=transaction;
        this.product=product;

    }
}
