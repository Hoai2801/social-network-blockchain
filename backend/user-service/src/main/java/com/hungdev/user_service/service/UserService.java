package com.hungdev.user_service.service;

import com.hungdev.user_service.dto.UserDto;
import com.hungdev.user_service.form.UserCreateForm;
import com.hungdev.user_service.form.UserUpdateForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface UserService {
    Page<UserDto> findAll(Pageable pageable);

    UserDto findById(UUID id);

    UserDto create(UserCreateForm form);

    UserDto update(UserUpdateForm form, UUID id) throws Exception;

    void deleteById(UUID id);
}
