package com.gdu.post_service.form;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class CommentUpdateForm {
    @NotNull(message = "ID người dùng không được để trống")
    private Long userId;

    @NotBlank(message = "Body không được để trống")
    @Length(max = 100, message = "Body có tối đa 100 kí tự")
    private String body;
}