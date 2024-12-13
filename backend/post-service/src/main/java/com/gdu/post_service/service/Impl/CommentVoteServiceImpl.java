package com.gdu.post_service.service.Impl;

import com.gdu.post_service.model.Comment;
import com.gdu.post_service.model.CommentVote;
import com.gdu.post_service.repository.CommentRepository;
import com.gdu.post_service.repository.CommentVoteRepository;
import com.gdu.post_service.service.CommentVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentVoteServiceImpl implements CommentVoteService {
    private final CommentVoteRepository commentVoteRepository;
    private final CommentRepository commentRepository;

    @Override
    public void upvote(Long userId, Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("Comment not found"));

        CommentVote existingVote = commentVoteRepository.findByUserIdAndCommentId(userId, commentId)
                .orElse(null);

        if (existingVote == null) {
            CommentVote newVote = CommentVote.builder()
                    .userId(userId)
                    .comment(comment)
                    .voteType(CommentVote.VoteType.UPVOTE)
                    .build();
            commentVoteRepository.save(newVote);
        } else if (existingVote.getVoteType() != CommentVote.VoteType.UPVOTE) {
            existingVote.setVoteType(CommentVote.VoteType.UPVOTE);
            commentVoteRepository.save(existingVote);
        }
    }

    @Override
    public void downvote(Long userId, Long commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new IllegalArgumentException("Comment not found"));

        CommentVote existingVote = commentVoteRepository.findByUserIdAndCommentId(userId, commentId)
                .orElse(null);

        if (existingVote == null) {
            CommentVote newVote = CommentVote.builder()
                    .userId(userId)
                    .comment(comment)
                    .voteType(CommentVote.VoteType.DOWNVOTE)
                    .build();
            commentVoteRepository.save(newVote);
        } else if (existingVote.getVoteType() != CommentVote.VoteType.DOWNVOTE) {
            existingVote.setVoteType(CommentVote.VoteType.DOWNVOTE);
            commentVoteRepository.save(existingVote);
        }
    }

    @Override
    public void unvote(Long userId, Long commentId) {
        CommentVote existingVote = commentVoteRepository.findByUserIdAndCommentId(userId, commentId)
                .orElse(null);

        if (existingVote != null) {
            commentVoteRepository.delete(existingVote);
        }
    }
}
