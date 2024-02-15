package com.MyShop.MyShopApplication.ComposityKeys;

import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.model.Warehouse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
@NoArgsConstructor
@Data
@AllArgsConstructor
public class ManageKey implements Serializable {
    private Manager manager;
    private Warehouse warehouse;
    private LocalDate startDate;

    // Constructors, getters, and setters

    // Override equals and hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ManageKey that = (ManageKey) o;

        return Objects.equals(manager.getManager_id(), that.getManager().getManager_id()) &&
                Objects.equals(warehouse.getWarehouse_id(), that.getWarehouse().getWarehouse_id()) &&
                Objects.equals(startDate, that.startDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(manager.getManager_id(), warehouse.getWarehouse_id(), startDate);
    }
}
