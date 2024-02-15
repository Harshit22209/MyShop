package com.MyShop.MyShopApplication.ComposityKeys;

import com.MyShop.MyShopApplication.model.Customer;
import com.MyShop.MyShopApplication.model.Inventory;
import com.MyShop.MyShopApplication.model.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@NoArgsConstructor
@Data
@AllArgsConstructor
public class CartKey implements Serializable {
    private Customer customer;
    private Inventory inventory;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartKey that = (CartKey) o;

        return Objects.equals(customer.getCustomer_id(), that.getCustomer().getCustomer_id()) &&
                Objects.equals(inventory.getInventory_id(), that.getInventory().getInventory_id());
    }

    @Override
    public int hashCode() {
        return Objects.hash(customer.getCustomer_id(), inventory.getInventory_id());
    }
}
