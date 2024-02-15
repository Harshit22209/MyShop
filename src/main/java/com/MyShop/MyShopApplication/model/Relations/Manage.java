package com.MyShop.MyShopApplication.model.Relations;

import com.MyShop.MyShopApplication.ComposityKeys.ManageKey;
import com.MyShop.MyShopApplication.model.Manager;
import com.MyShop.MyShopApplication.model.Warehouse;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@IdClass(ManageKey.class)
public class Manage {
    @Id
    @ManyToOne
    @JoinColumn(name = "manager_id")
    private Manager manager;

    public Manage(Manager manager, Warehouse warehouse, LocalDate startDate) {
        this.manager = manager;
        this.warehouse = warehouse;
        this.startDate = startDate;
    }

    @Id
    @ManyToOne
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    @Id
    @Column(name = "start_date")
    private LocalDate startDate;

    private LocalDate endDate;

}
