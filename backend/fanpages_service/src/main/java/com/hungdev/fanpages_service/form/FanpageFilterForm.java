package com.hungdev.fanpages_service.form;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FanpageFilterForm {
    private String search; // Tìm kiếm theo tên hoặc mô tả
    private Long ownerId; // Lọc theo ID của chủ sở hữu
}
