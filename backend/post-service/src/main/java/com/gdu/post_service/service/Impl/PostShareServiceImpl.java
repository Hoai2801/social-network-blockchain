package com.gdu.post_service.service.Impl;

import com.gdu.post_service.dto.PostShareDto;
import com.gdu.post_service.model.Post;
import com.gdu.post_service.model.PostShare;
import com.gdu.post_service.repository.PostRepository;
import com.gdu.post_service.repository.PostShareRepository;
import com.gdu.post_service.service.PostShareService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostShareServiceImpl implements PostShareService {
    private final PostShareRepository postShareRepository;
    private final PostRepository postRepository;

    @Override
    public PostShareDto sharePostByPostId(Long userId, Long postId) {
        var optionalPost = postRepository.findById(postId);
        if (optionalPost.isEmpty()) {
            throw new IllegalArgumentException("Post does not exist");
        }

        Post post = optionalPost.get();

        var existingLike = postShareRepository.findByUserIdAndPost(userId, post);
        if (existingLike.isPresent()) {
            throw new IllegalArgumentException("User already liked this post");
        }

        var postShare = PostShare.builder()
                .userId(userId)
                .post(post)
                .build();

        postShareRepository.save(postShare);

        return PostShareDto.builder()
                .userId(userId)
                .postId(postId)
                .build();
    }
}
