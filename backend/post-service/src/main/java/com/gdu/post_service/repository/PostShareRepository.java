package com.gdu.post_service.repository;

import com.gdu.post_service.model.Post;
import com.gdu.post_service.model.PostShare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostShareRepository extends JpaRepository<PostShare, Long> {
    Optional<PostShare> findByUserIdAndPost(Long userId, Post post);
}
