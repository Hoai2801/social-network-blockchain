package com.gdu.post_service.mapper;

import com.gdu.post_service.dto.CommentDto;
import com.gdu.post_service.dto.CommentVoteDto;
import com.gdu.post_service.form.CommentCreateForm;
import com.gdu.post_service.form.CommentUpdateForm;
import com.gdu.post_service.model.Comment;
import com.gdu.post_service.model.CommentVote;

public class CommentMapper {
    public static CommentDto map(Comment comment) {
        var dto = new CommentDto();
        dto.setUserId(comment.getUserId());
        dto.setId(comment.getId());
        dto.setBody(comment.getBody());
        dto.setCreatedAt(comment.getCreatedAt());
        dto.setUpdatedAt(comment.getUpdatedAt());
        return dto;
    }

    public static CommentVoteDto map(CommentVote commentVote) {
        var dto = new CommentVoteDto();
        dto.setUserId(commentVote.getUserId());
        dto.setId(commentVote.getId());
        dto.setCommentId(commentVote.getComment().getId());
        dto.setVoteType(commentVote.getVoteType().toString());
        dto.setCreatedAt(commentVote.getCreatedAt());
        return dto;
    }

    public static Comment map(CommentCreateForm form) {
        var comment = new Comment();
        comment.setUserId(form.getUserId());
        comment.setBody(form.getBody());
        return comment;
    }

    public static void map(CommentUpdateForm form, Comment comment) {
        comment.setUserId(form.getUserId());
        comment.setBody(form.getBody());
    }
}
