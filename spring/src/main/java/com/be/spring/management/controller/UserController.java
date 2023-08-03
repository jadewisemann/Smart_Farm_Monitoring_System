package com.be.spring.management.controller;


import com.be.spring.management.dto.AddUserRequest;
import com.be.spring.management.dto.JwtToken;
import com.be.spring.management.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/members")
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    public JwtToken login(@RequestBody AddUserRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();
        JwtToken token = userService.login(email, password);
        return token;
    }
}