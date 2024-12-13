package com.gdu.post_service.form;

import lombok.Data;

import java.time.LocalDate;

@Data
public class PostFilterForm {
    private String search;
    private LocalDate minCreatedDate;
    private LocalDate maxCreatedDate;
}