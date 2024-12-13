package com.gdu.post_service.service;

import com.gdu.post_service.dto.PostLikeDto;
import org.springframework.stereotype.Service;

@Service
public interface PostLikeService {
    PostLikeDto likePostByPostId(Long userId, Long postId);
    PostLikeDto unlikePostByPostId(Long userId, Long postId);
}
