package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.ComposityKeys.ManageKey;
import com.MyShop.MyShopApplication.model.Relations.Manage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManageRepo extends JpaRepository<Manage, ManageKey> {


}
