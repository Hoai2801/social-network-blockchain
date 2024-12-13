package com.gdu.post_service.form;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class PostCreateForm {
    @NotNull(message = "ID người dùng không được bỏ trống")
    private Long userId;

    @NotBlank(message = "Tiêu đề không được bỏ trống")
    @Length(max = 50, message = "Tiêu đề có tối đa 50 kí tự")
    private String title;

    @NotBlank(message = "Mô tả không được bỏ trống")
    @Length(max = 100, message = "Tiêu đề có tối đa 50 kí tự")
    private String description;

    @NotBlank(message = "Nội dung không được bỏ trống")
    @Length(max = 150, message = "Tiêu đề có tối đa 50 kí tự")
    private String content;
}