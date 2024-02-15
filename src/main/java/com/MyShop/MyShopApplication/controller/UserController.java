package com.MyShop.MyShopApplication.controller;

import com.MyShop.MyShopApplication.model.User;
import com.MyShop.MyShopApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins={"http://localhost:3000"})
public class UserController {
    @Autowired
    UserService service;
    @PostMapping("register")
    public User addUser(@RequestBody User user){
        return service.addUser(user);



    }
    @GetMapping("{email}")
    public User getUser(@PathVariable String email){
        return service.getUser(email);
    }

}
