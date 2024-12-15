package com.hungdev.fanpages_service.controller;
import com.hungdev.fanpages_service.dto.FanpageDto;
import com.hungdev.fanpages_service.form.FanpageCreateForm;
import com.hungdev.fanpages_service.form.FanpageUpdateForm;
import com.hungdev.fanpages_service.service.FanpageService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@AllArgsConstructor
@Validated
public class FanpageController {
    private FanpageService fanpageService;

    @GetMapping("/api/v1/fanpages")
    public Page<FanpageDto> findAll(Pageable pageable) {
        return fanpageService.findAll(pageable);
    }

    @GetMapping("/api/v1/fanpages/{id}")
    public FanpageDto findById(@PathVariable UUID id) {
        return fanpageService.findById(id);
    }

    @PostMapping("/api/v1/fanpages")
    public FanpageDto create(@Valid @RequestBody FanpageCreateForm form) {
        return fanpageService.create(form);
    }

    @PutMapping("/api/v1/fanpages/{id}")
    public FanpageDto update(@PathVariable UUID id, @Valid @RequestBody FanpageUpdateForm form) throws Exception {
        return fanpageService.update(form, id);
    }

    @DeleteMapping("/api/v1/fanpages/{id}")
    public void deleteById(@PathVariable("id") UUID id) {
        fanpageService.deleteById(id);
    }
}
