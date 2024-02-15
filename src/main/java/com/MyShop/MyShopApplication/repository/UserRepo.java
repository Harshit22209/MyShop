package com.MyShop.MyShopApplication.repository;

import com.MyShop.MyShopApplication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String> {

}
