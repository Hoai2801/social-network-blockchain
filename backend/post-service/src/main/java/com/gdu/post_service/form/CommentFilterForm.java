package com.gdu.post_service.form;

import lombok.Data;

@Data
public class CommentFilterForm {
    private String search;
    private Long postId;
}

