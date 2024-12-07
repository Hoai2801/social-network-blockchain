package com.gdu.post_service.dto;


import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostDto {
    private Long id;
    private Long userId;
    private String title;
    private String description;
    private String content;

//    private List<CommentDto> comments;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}