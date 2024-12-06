package com.hungdev.user_service.dto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public class UserDto {
    private UUID id;
    private String publicKey;
    private String username;
    private String images;
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
