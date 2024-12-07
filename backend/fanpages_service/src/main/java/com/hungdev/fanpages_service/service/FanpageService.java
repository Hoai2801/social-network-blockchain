package com.hungdev.fanpages_service.service;

import com.hungdev.fanpages_service.dto.FanpageDto;
import com.hungdev.fanpages_service.form.FanpageCreateForm;
import com.hungdev.fanpages_service.form.FanpageUpdateForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface FanpageService {
    Page<FanpageDto> findAll(Pageable pageable);

    FanpageDto findById(UUID id);

    FanpageDto create(FanpageCreateForm form);

    FanpageDto update(FanpageUpdateForm form, UUID id) throws Exception;

    void deleteById(UUID id);
}
