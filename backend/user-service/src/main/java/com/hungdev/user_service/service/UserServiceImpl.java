package com.hungdev.user_service.service;

import com.hungdev.user_service.dto.UserDto;
import com.hungdev.user_service.entity.User;
import com.hungdev.user_service.form.UserCreateForm;
import com.hungdev.user_service.form.UserUpdateForm;
import com.hungdev.user_service.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private ModelMapper modelMapper;

    @Override
    public Page<UserDto> findAll(Pageable pageable){
        return userRepository.findAll(pageable).map(user -> modelMapper.map(user, UserDto.class));
    }
    @Override
    public UserDto findById(UUID id){
        return userRepository.findById(id).map(user -> modelMapper.map(user, UserDto.class)).orElse(null);
    }

    @Override
    public UserDto create(UserCreateForm form) {
        var user = modelMapper.map(form, User.class);
        var savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDto.class);
    }

    @Override
    public UserDto update(UserUpdateForm form, UUID id) throws Exception {
        var optional = userRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("User not found"); // Ném ngoại lệ nếu không tìm thấy
        }
        var user = optional.get();
        modelMapper.map(form, user);
        var savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDto.class);
    }

    @Override
    public void deleteById(UUID id) {
        userRepository.deleteById(id);
    }
}
