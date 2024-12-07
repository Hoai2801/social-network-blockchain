package com.gdu.post_service.repository;

import com.gdu.post_service.model.Comment;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>, JpaSpecificationExecutor<Comment> {
//    List<Comment> findByEmail(String email);

//    List<Comment> findByIdGreaterThanEqualAndIdLessThanEqual(Long minId, Long maxId);

    Page<Comment> findByPostId(Long postId, Pageable pageable);

//    void deleteByEmail(String email);

    @Query(value = "DELETE FROM Comment WHERE post_id = :postId", nativeQuery = true)
    @Modifying
    @Transactional
    void deleteAllByPostId(@Param("postId") Long postId);

}

