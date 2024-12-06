package com.hungdev.fanpages_service.form;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public class FanpageCreateForm {
    @NotBlank(message = "Tên không được để trống")
    @Length(max = 100, message = "Tên có tối đa 100 kí tự")
    private String name;

    private UUID ownerId;

    @NotBlank(message = "Mô tả không được để trống")
    private String images;
    @NotBlank(message = "Mô tả không được để trống")
    @Length(max = 255, message = "Mô tả có tối đa 255 kí tự")
    private String description; // Mô tả về fanpage

    @NotBlank(message = "Tên coin không được để trống")
    @Length(max = 50, message = "Tên coin có tối đa 50 kí tự")
    private String coinName; // Tên coin

}
