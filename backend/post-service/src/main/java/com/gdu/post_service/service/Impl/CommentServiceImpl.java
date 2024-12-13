package com.gdu.post_service.service.Impl;

import com.gdu.post_service.dto.CommentDto;
import com.gdu.post_service.form.CommentCreateForm;
import com.gdu.post_service.form.CommentFilterForm;
import com.gdu.post_service.form.CommentUpdateForm;
import com.gdu.post_service.mapper.CommentMapper;
import com.gdu.post_service.repository.CommentRepository;
import com.gdu.post_service.repository.PostRepository;
import com.gdu.post_service.service.CommentService;
import com.gdu.post_service.specification.CommentSpecification;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@AllArgsConstructor
public class CommentServiceImpl implements CommentService {
    private CommentRepository commentRepository;
    private PostRepository postRepository;

    @Override
    public Page<CommentDto> findAll(CommentFilterForm commentFilterForm, Pageable pageable){
        var spec = CommentSpecification.buildSpec(commentFilterForm);
        return commentRepository.findAll(spec ,pageable).map(CommentMapper::map);
    }

    @Override
    public Page<CommentDto> findByPostId(Long postId, Pageable pageable) {
        return commentRepository.findByPostId(postId, pageable).map(CommentMapper::map);
    }

    @Override
    public CommentDto findById(Long id){
        return commentRepository.findById(id).map(CommentMapper::map).orElse(null);
    }

    @Override
    public CommentDto create(CommentCreateForm form, Long postId) {
        var optional = postRepository.findById(postId);
        if (optional.isEmpty()){
            return null;
        }
        var post = optional.get();
        var comment = CommentMapper.map(form);
        comment.setPostId(post);
        var savedComment = commentRepository.save(comment);
        return CommentMapper.map(savedComment);
    }

    @Override
    public CommentDto update(CommentUpdateForm form, Long id) {
        var optional = commentRepository.findById(id);
        if (optional.isEmpty()) {
            return null;
        }
        var comment = optional.get();
        CommentMapper.map(form, comment);
        var savedComment = commentRepository.save(comment);
        return CommentMapper.map(savedComment);
    }

    @Override
    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void deleteAllByPostId(Long postId) {
        commentRepository.deleteAllByPostId(postId);
    }
}
