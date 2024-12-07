package com.gdu.post_service.service;

import org.springframework.stereotype.Service;

@Service
public interface CommentVoteService {
    void upvote(Long userId, Long commentId);
    void downvote(Long userId, Long commentId);
    void unvote(Long userId, Long commentId);
}
