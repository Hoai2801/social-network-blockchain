package com.gdu.post_service.repository;

import com.gdu.post_service.model.Post;
import com.gdu.post_service.model.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {
    Optional<PostLike> findByUserIdAndPost(Long userId, Post post);
}
