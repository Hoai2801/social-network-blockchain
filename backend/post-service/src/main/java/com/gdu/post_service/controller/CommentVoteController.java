package com.gdu.post_service.controller;

import com.gdu.post_service.service.CommentVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts/{postId}/comments/{commentId}/votes")
public class CommentVoteController {
    private final CommentVoteService commentVoteService;

    @PostMapping("/upvote")
    public ResponseEntity<String> upvote(
            @PathVariable Long postId,
            @PathVariable Long commentId,
            @RequestParam Long userId) {

        try {
            commentVoteService.upvote(userId, commentId);
            return ResponseEntity.ok("Upvoted successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/downvote")
    public ResponseEntity<String> downvote(
            @PathVariable Long postId,
            @PathVariable Long commentId,
            @RequestParam Long userId) {

        try {
            commentVoteService.downvote(userId, commentId);
            return ResponseEntity.ok("Downvoted successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("")
    public ResponseEntity<String> unvote(
            @PathVariable Long postId,
            @PathVariable Long commentId,
            @RequestParam Long userId) {

        try {
            commentVoteService.unvote(userId, commentId);
            return ResponseEntity.ok("Vote removed successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

