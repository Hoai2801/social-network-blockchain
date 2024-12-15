package com.hungdev.user_service.repository;

import com.hungdev.user_service.entity.User;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    boolean existsByPublicKey(@NotBlank(message = "Địa chỉ ví không được để trống") String publicKey);

    Object findByPublicKey(@NotBlank(message = "Địa chỉ ví không được để trống") String publicKey);
}
