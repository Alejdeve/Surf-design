CREATE DATABASE fusionar_imagenes;
USE fusionar_imagenes;

CREATE TABLE imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    surf_image VARCHAR(255) NOT NULL,
    design_image VARCHAR(255) NOT NULL,
    merged_image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);