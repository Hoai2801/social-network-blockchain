package com.gdu.post_service.service.Impl;

import com.gdu.post_service.dto.PostLikeDto;
import com.gdu.post_service.model.Post;
import com.gdu.post_service.model.PostLike;
import com.gdu.post_service.repository.PostLikeRepository;
import com.gdu.post_service.repository.PostRepository;
import com.gdu.post_service.service.PostLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostLikeServiceImpl implements PostLikeService {

    private final PostLikeRepository postLikeRepository;
    private final PostRepository postRepository;

    @Override
    public PostLikeDto likePostByPostId(Long userId, Long postId) {
        var optionalPost = postRepository.findById(postId);

        if (optionalPost.isEmpty()) {
            throw new IllegalArgumentException("Post does not exist");
        }

        Post post = optionalPost.get();

        var existingLike = postLikeRepository.findByUserIdAndPost(userId, post);
        if (existingLike.isPresent()) {
            throw new IllegalArgumentException("User already liked this post");
        }

        var postLike = PostLike.builder()
                .userId(userId)
                .post(post)
                .build();

        postLikeRepository.save(postLike);

        return PostLikeDto.builder()
                .userId(userId)
                .postId(postId)
                .build();
    }

    @Override
    public PostLikeDto unlikePostByPostId(Long userId, Long postId) {
        var optionalPost = postRepository.findById(postId);
        if (optionalPost.isEmpty()) {
            throw new IllegalArgumentException("Post does not exist");
        }

        Post post = optionalPost.get();

        var existingLike = postLikeRepository.findByUserIdAndPost(userId, post);
        if (existingLike.isEmpty()) {
            throw new IllegalArgumentException("User has not liked this post");
        }

        postLikeRepository.delete(existingLike.get());

        return PostLikeDto.builder()
                .userId(userId)
                .postId(postId)
                .build();
    }
}
