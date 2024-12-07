package com.gdu.post_service.controller;

import com.gdu.post_service.dto.PostLikeDto;
import com.gdu.post_service.service.PostLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostLikeController {
    private final PostLikeService postLikeService;

    @PostMapping("/{postId}/like")
    public ResponseEntity<PostLikeDto> likePost(@RequestBody PostLikeDto postLikeDto, @PathVariable Long postId) {
        PostLikeDto result = postLikeService.likePostByPostId(postLikeDto.getUserId(), postId);
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/{postId}/unlike")
    public ResponseEntity<PostLikeDto> unlikePost(@RequestParam Long userId, @PathVariable Long postId) {
        PostLikeDto postLikeDto = postLikeService.unlikePostByPostId(userId, postId);
        return ResponseEntity.ok(postLikeDto);
    }
}
