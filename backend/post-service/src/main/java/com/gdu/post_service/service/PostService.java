package com.gdu.post_service.service;

import com.gdu.post_service.dto.PostDto;
import com.gdu.post_service.form.PostCreateForm;
import com.gdu.post_service.form.PostFilterForm;
import com.gdu.post_service.form.PostUpdateForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface PostService {
    Page<PostDto> findAll(PostFilterForm postFilterForm, Pageable pageable);

    PostDto findById(Long id);

    PostDto create(PostCreateForm form);

    PostDto update(PostUpdateForm form, Long id);

    void deleteById(Long id);
}
