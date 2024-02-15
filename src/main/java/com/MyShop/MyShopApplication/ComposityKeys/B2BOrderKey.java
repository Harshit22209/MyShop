package com.MyShop.MyShopApplication.ComposityKeys;

import com.MyShop.MyShopApplication.model.Product;
import com.MyShop.MyShopApplication.model.Transactions;
import com.MyShop.MyShopApplication.model.Warehouse;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;
@NoArgsConstructor
@Data
@AllArgsConstructor
public class B2BOrderKey implements Serializable {
    private Transactions transaction;
    private Warehouse warehouse;
    private Product product;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        B2BOrderKey that = (B2BOrderKey) o;

        return Objects.equals(transaction.getTrans_id(), that.getTransaction().getTrans_id()) &&
                Objects.equals(warehouse.getWarehouse_id(), that.getWarehouse().getWarehouse_id()) &&
                Objects.equals(product.getId(), that.getProduct().getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(transaction.getTrans_id(), warehouse.getWarehouse_id(), product.getId());
    }



}
