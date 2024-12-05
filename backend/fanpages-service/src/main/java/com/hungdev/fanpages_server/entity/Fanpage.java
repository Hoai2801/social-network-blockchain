package com.hungdev.fanpages_server.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "fanpage")
public class Fanpage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotNull
    @Size(min = 1, max = 100)
    private String name;

    private UUID ownerId;

    @Column(name = "images", nullable = true)
    private String images;

    @NotNull
    @Size(min = 1, max = 255)
    private String description; // Mô tả về fanpage

    @NotNull
    @Size(min = 1, max = 50)
    private String coinName; // Tên coin

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
