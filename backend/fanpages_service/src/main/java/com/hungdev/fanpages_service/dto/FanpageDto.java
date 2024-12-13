package com.hungdev.fanpages_service.dto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
public class FanpageDto {
    private UUID id;
    private String name;
    private UUID ownerId;
    private String images;
    private String description;
    private String coinName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
