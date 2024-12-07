package com.gdu.post_service.controller;

import com.gdu.post_service.dto.PostShareDto;
import com.gdu.post_service.service.PostShareService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostShareController {
    private final PostShareService postShareService;

    @PostMapping("/{postId}/share")
    public ResponseEntity<PostShareDto> sharePost(@RequestBody PostShareDto postShareDto, @PathVariable Long postId) {
        PostShareDto result = postShareService.sharePostByPostId(postShareDto.getUserId(), postId);
        return ResponseEntity.ok(result);
    }
}
