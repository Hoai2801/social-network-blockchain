package com.hungdev.fanpages_server.service;

import com.hungdev.fanpages_server.dto.FanpageDto;
import com.hungdev.fanpages_server.entity.Fanpage;
import com.hungdev.fanpages_server.form.FanpageCreateForm;
import com.hungdev.fanpages_server.form.FanpageUpdateForm;
import com.hungdev.fanpages_server.repository.FanpageRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@AllArgsConstructor
@Service
public class FanpageServiceImpl implements FanpageService {
    private FanpageRepository fanpageRepository;
    private ModelMapper modelMapper;

    @Override
    public Page<FanpageDto> findAll(Pageable pageable){
        return fanpageRepository.findAll(pageable).map(fanpage -> modelMapper.map(fanpage, FanpageDto.class));
    }
    @Override
    public FanpageDto findById(UUID id){
        return fanpageRepository.findById(id).map(post -> modelMapper.map(post, FanpageDto.class)).orElse(null);
    }

    @Override
    public FanpageDto create(FanpageCreateForm form) {
        var fanpage = modelMapper.map(form, Fanpage.class);
        var savedFanpage = fanpageRepository.save(fanpage);
        return modelMapper.map(savedFanpage, FanpageDto.class);
    }

    @Override
    public FanpageDto update(FanpageUpdateForm form, UUID id) throws Exception {
        var optional = fanpageRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("Fanpage not found"); // Ném ngoại lệ nếu không tìm thấy
        }
        var fanpage = optional.get();
        modelMapper.map(form, fanpage);
        var savedFanpage = fanpageRepository.save(fanpage);
        return modelMapper.map(savedFanpage, FanpageDto.class);
    }

    @Override
    public void deleteById(UUID id) {
        fanpageRepository.deleteById(id);
    }
}
