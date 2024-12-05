package com.hungdev.fanpages_server.repository;

import com.hungdev.fanpages_server.entity.Fanpage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface FanpageRepository extends JpaRepository<Fanpage, UUID> {
}
