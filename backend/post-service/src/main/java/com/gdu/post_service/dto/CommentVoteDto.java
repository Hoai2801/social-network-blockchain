package com.gdu.post_service.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentVoteDto {

    private Long id;

    private Long commentId;

    private Long userId;

    private String voteType;

    private LocalDateTime createdAt;
}

