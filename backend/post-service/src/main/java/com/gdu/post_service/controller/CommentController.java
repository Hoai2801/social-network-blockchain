package com.gdu.post_service.controller;

import com.gdu.post_service.dto.CommentDto;
import com.gdu.post_service.form.CommentCreateForm;
import com.gdu.post_service.form.CommentFilterForm;
import com.gdu.post_service.form.CommentUpdateForm;
import com.gdu.post_service.service.CommentService;
import com.gdu.post_service.validation.CommentIdExists;
import com.gdu.post_service.validation.PostIdExists;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@AllArgsConstructor
public class CommentController {
    private CommentService commentService;

    @GetMapping("/comments")
    public Page<CommentDto> findAll(CommentFilterForm commentFilterForm, Pageable pageable) {
        return commentService.findAll(commentFilterForm, pageable);
    }

    @GetMapping("/posts/{postId}/comments")
    public Page<CommentDto> findByPostId(@PathVariable("postId") @PostIdExists Long postId, Pageable pageable) {
        return commentService.findByPostId(postId, pageable);
    }

    @GetMapping("/comments/{id}")
    public CommentDto findById(@PathVariable("id") @CommentIdExists Long id) {
        return commentService.findById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/posts/{postId}/comments")
    public CommentDto create(@PathVariable @PostIdExists Long postId, @RequestBody @Valid CommentCreateForm form) {
        return commentService.create(form, postId);
    }

    @PutMapping("/comments/{id}")
    public CommentDto update(
            @RequestBody @Valid CommentUpdateForm form,
            @PathVariable("id") @CommentIdExists Long id
    ) {
        return commentService.update(form, id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/comments/{id}")
    public void deleteById(@PathVariable("id") @CommentIdExists Long id) {
        commentService.deleteById(id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/posts/{postId}/comments")
    public void deleteAllByPostId(@PathVariable("postId") @PostIdExists Long postId) {
        commentService.deleteAllByPostId(postId);
    }

}
