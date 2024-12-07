package com.gdu.post_service.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostShareDto {
    private Long userId;
    private Long postId;
}
