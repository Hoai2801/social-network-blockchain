package com.gdu.post_service.mapper;

import com.gdu.post_service.dto.PostDto;
import com.gdu.post_service.form.PostCreateForm;
import com.gdu.post_service.form.PostUpdateForm;
import com.gdu.post_service.model.Post;

public class PostMapper {
    public static PostDto map(Post post) {
        var dto = new PostDto();
        dto.setId(post.getId());
        dto.setUserId(post.getUserId());
        dto.setTitle(post.getTitle());
        dto.setDescription(post.getDescription());
        dto.setContent(post.getContent());
        dto.setCreatedAt(post.getCreatedAt());
        dto.setUpdatedAt(post.getUpdatedAt());
        return dto;
    }

    public static Post map(PostCreateForm form) {
        var post = new Post();
        post.setUserId(form.getUserId());
        post.setTitle(form.getTitle());
        post.setDescription(form.getDescription());
        post.setContent(form.getContent());
        return post;
    }

    public static void map(PostUpdateForm form, Post post) {
        post.setUserId(form.getUserId());
        post.setTitle(form.getTitle());
        post.setDescription(form.getDescription());
        post.setContent(form.getContent());
    }
}
