package com.gdu.post_service.service;

import com.gdu.post_service.dto.PostShareDto;
import org.springframework.stereotype.Service;

@Service
public interface PostShareService {
    PostShareDto sharePostByPostId(Long userId, Long postId);
}
