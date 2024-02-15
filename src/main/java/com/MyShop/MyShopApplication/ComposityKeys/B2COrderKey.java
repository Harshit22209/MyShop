package com.MyShop.MyShopApplication.ComposityKeys;

import com.MyShop.MyShopApplication.model.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;
@NoArgsConstructor
@Data
@AllArgsConstructor
public class B2COrderKey implements Serializable {
    private Transactions transaction;
    private Inventory inventory;
    private Customer customer;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        B2COrderKey that = (B2COrderKey) o;

        return Objects.equals(transaction.getTrans_id(), that.getTransaction().getTrans_id()) &&
                Objects.equals(inventory.getInventory_id(), that.getInventory().getInventory_id()) &&
                Objects.equals(customer.getCustomer_id(), that.getCustomer().getCustomer_id());
    }

    @Override
    public int hashCode() {
        return Objects.hash(transaction.getTrans_id(), inventory.getInventory_id(), customer.getCustomer_id());
    }



}

