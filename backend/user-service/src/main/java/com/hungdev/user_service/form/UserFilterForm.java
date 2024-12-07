package com.hungdev.user_service.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserFilterForm {
    private String search; // Tìm kiếm theo tên hoặc mô tả
    private Long ownerId; // Lọc theo ID của chủ sở hữu
}
