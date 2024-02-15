package com.MyShop.MyShopApplication.ComposityKeys;

import com.MyShop.MyShopApplication.model.Inventory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

@NoArgsConstructor
@Data
@AllArgsConstructor
public class PricingKey implements Serializable {
    Inventory inventory;
    LocalDate startDate;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PricingKey that = (PricingKey) o;

        return Objects.equals(inventory.getInventory_id() ,that.getInventory().getInventory_id()) &&
                Objects.equals(startDate, that.startDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(inventory.getInventory_id(),  startDate);
    }
}
