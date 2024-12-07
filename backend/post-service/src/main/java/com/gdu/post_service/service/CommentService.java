package com.gdu.post_service.service;

import com.gdu.post_service.dto.CommentDto;
import com.gdu.post_service.form.CommentCreateForm;
import com.gdu.post_service.form.CommentFilterForm;
import com.gdu.post_service.form.CommentUpdateForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CommentService {
    Page<CommentDto> findAll(CommentFilterForm commentFilterForm, Pageable pageable);

    Page<CommentDto> findByPostId(Long postId, Pageable pageable);

    CommentDto findById(Long id);

    CommentDto create(CommentCreateForm form, Long postId);

    CommentDto update(CommentUpdateForm form, Long id);

    void deleteById(Long id);

    void deleteAllByPostId(Long postId);
}