package com.gdu.post_service.controller;

import com.gdu.post_service.dto.PostDto;
import com.gdu.post_service.form.PostCreateForm;
import com.gdu.post_service.form.PostFilterForm;
import com.gdu.post_service.form.PostUpdateForm;
import com.gdu.post_service.service.PostService;
import com.gdu.post_service.validation.PostIdExists;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@AllArgsConstructor
@RequestMapping("/posts")
public class PostController {
    private PostService postService;

    @GetMapping("")
    public Page<PostDto> findAll(PostFilterForm form, Pageable pageable) {
        return postService.findAll(form, pageable);
    }

    @GetMapping("/{id}")
    public PostDto findById(@PathVariable("id") @PostIdExists Long id){
        return postService.findById(id);
    }

    @PostMapping("")
    public PostDto create(@RequestBody @Valid PostCreateForm form){
        return postService.create(form);
    }

    @PutMapping("/{id}")
    public PostDto update(
            @RequestBody PostUpdateForm form,
            @PathVariable("id") @PostIdExists Long id
    ){
        return postService.update(form, id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable("id") @PostIdExists Long id){
        postService.deleteById(id);
    }
}

