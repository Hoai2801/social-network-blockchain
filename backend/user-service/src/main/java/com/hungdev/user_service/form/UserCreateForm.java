package com.hungdev.user_service.form;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@AllArgsConstructor
public class UserCreateForm {

    @NotBlank(message = "Địa chỉ ví không được để trống")
    private String publicKey;

    @NotBlank(message = "Tên người dùng không được để trống")
    @Length(max = 100, message = "Tên người dùng có tối đa 100 kí tự")
    private String username;
    
    private String password;

    private String images;

    @NotBlank(message = "Email không được để trống")
    @Length(max = 255, message = "Email có tối đa 255 kí tự")
    @Email
    private String email;


}
