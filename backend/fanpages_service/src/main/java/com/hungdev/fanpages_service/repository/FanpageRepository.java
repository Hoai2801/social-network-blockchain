package com.hungdev.fanpages_service.repository;

import com.hungdev.fanpages_service.entity.Fanpage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FanpageRepository extends JpaRepository<Fanpage, UUID> {
}
