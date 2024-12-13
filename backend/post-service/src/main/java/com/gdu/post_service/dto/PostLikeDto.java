package com.gdu.post_service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostLikeDto {
    private Long userId;
    private Long postId;
}
