create database user_service;

use user_service;

CREATE TABLE users
(
    id         BINARY(16)   NOT NULL,
    public_key VARCHAR(255) NULL,
    password   VARCHAR(255) NULL,
    username   VARCHAR(100) NOT NULL,
    images     VARCHAR(255) NULL,
    email      VARCHAR(255) NULL,
    created_at datetime     NOT NULL,
    updated_at datetime     NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id)
);
