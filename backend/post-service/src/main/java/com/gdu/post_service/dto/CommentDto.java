package com.gdu.post_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDto {
    private Long id;
    private Long userId;
    private String body;

//    List<CommentVoteDto> votes  ;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}