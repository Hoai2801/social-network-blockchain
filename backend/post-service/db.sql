create database social_blockchain;

use social_blockchain;

-- Tạo bảng posts
CREATE TABLE posts (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(50) NOT NULL,
                       description VARCHAR(100) NOT NULL,
                       content VARCHAR(150) NOT NULL,
                       user_id INT,
                       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tạo bảng comments
CREATE TABLE comments (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          user_id INT NOT NULL,
                          body VARCHAR(100) NOT NULL,
                          post_id INT NOT NULL,
                          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
);

-- Tạo bảng lưu lượt thích bài viết
CREATE TABLE post_likes (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            post_id INT NOT NULL,
                            user_id INT,
                            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                            CONSTRAINT fk_post_like FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
);

-- Tạo bảng lưu thông tin chia sẻ bài viết
CREATE TABLE post_shares (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             post_id INT NOT NULL,
                             user_id INT,
                             created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                             CONSTRAINT fk_post_share FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE
);

-- Tạo bảng lưu thông tin upvote/downvote bình luận
CREATE TABLE comment_votes (
                               id INT AUTO_INCREMENT PRIMARY KEY,
                               comment_id INT NOT NULL,
                               user_id INT NOT NULL,
                               vote_type ENUM('upvote', 'downvote') NOT NULL,
                               created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                               CONSTRAINT fk_comment_vote FOREIGN KEY (comment_id) REFERENCES comments (id) ON DELETE CASCADE
);

