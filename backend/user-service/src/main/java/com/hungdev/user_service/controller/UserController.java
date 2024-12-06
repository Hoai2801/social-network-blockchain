package com.hungdev.user_service.controller;
import com.hungdev.user_service.dto.UserDto;
import com.hungdev.user_service.form.UserCreateForm;
import com.hungdev.user_service.form.UserUpdateForm;
import com.hungdev.user_service.service.UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@AllArgsConstructor
@Validated
public class UserController {
    private UserService userService;

    @GetMapping("/api/v1/users")
    public Page<UserDto> findAll(Pageable pageable) {
        return userService.findAll(pageable);
    }

    @GetMapping("/api/v1/users/{id}")
    public UserDto findById(@PathVariable UUID id) {
        return userService.findById(id);
    }

    @PostMapping("/api/v1/users")
    public UserDto create(@Valid @RequestBody UserCreateForm form) {
        return userService.create(form);
    }

    @PutMapping("/api/v1/users/{id}")
    public UserDto update(@PathVariable UUID id, @Valid @RequestBody UserUpdateForm form) throws Exception {
        return userService.update(form, id);
    }

    @DeleteMapping("/api/v1/users/{id}")
    public void deleteById(@PathVariable("id") UUID id) {
        userService.deleteById(id);
    }
}
