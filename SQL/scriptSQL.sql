CREATE DATABASE votaciondb;

CREATE TABLE region (
    id_region INT AUTO_INCREMENT PRIMARY KEY,
    nombre_region VARCHAR(255) NOT NULL
);

CREATE TABLE comuna (
    id_comuna INT AUTO_INCREMENT PRIMARY KEY,
    nombre_comuna VARCHAR(255) NOT NULL,
    id_region INT,
    FOREIGN KEY (id_region) REFERENCES region(id_region)
);

CREATE TABLE candidato (
    id_candidato INT AUTO_INCREMENT PRIMARY KEY,
    nombre_candidato VARCHAR(255) NOT NULL
);

CREATE TABLE voto (
    id_voto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_apellido VARCHAR(255) NOT NULL,
    alias VARCHAR(50) NOT NULL,
    rut VARCHAR(12) NOT NULL,
    email VARCHAR(255) NOT NULL,
    id_region INT,
    id_comuna INT,
    id_candidato INT,
    como_se_entero_1 VARCHAR(50),
    como_se_entero_2 VARCHAR(50),
    FOREIGN KEY (id_region) REFERENCES region(id_region),
    FOREIGN KEY (id_comuna) REFERENCES comuna(id_comuna),
    FOREIGN KEY (id_candidato) REFERENCES candidato(id_candidato)
);

INSERT INTO region (id_region, nombre_region) VALUES
(1, 'Región de Tarapacá'),
(2, 'Región de Antofagasta'),
(3, 'Región de Atacama'),
(4, 'Región de Coquimbo'),
(5, 'Región de Valparaíso'),
(6, 'Región del Libertador General Bernardo O’Higgins'),
(7, 'Región del Maule'),
(8, 'Región del Biobío'),
(9, 'Región de La Araucanía'),
(10, 'Región de Los Lagos'),
(11, 'Región de Aysén del General Carlos Ibáñez del Campo'),
(12, 'Región de Magallanes y de la Antártica Chilena'),
(13, 'Región Metropolitana de Santiago'),
(14, 'Región de Los Ríos'),
(15, 'Región de Arica y Parinacota'),
(16, 'Región de Ñuble');

INSERT INTO comuna (id_comuna, nombre_comuna, id_region) VALUES
(1, 'Iquique', 1),
(2, 'Alto Hospicio', 1),
(3, 'Pozo Almonte', 1),

(4, 'Antofagasta', 2),
(5, 'Calama', 2),
(6, 'Mejillones', 2),

(7, 'Copiapó', 3),
(8, 'Vallenar', 3),
(9, 'Caldera', 3),

(10, 'La Serena', 4),
(11, 'Coquimbo', 4),
(12, 'Ovalle', 4),

(13, 'Valparaíso', 5),
(14, 'Viña del Mar', 5),
(15, 'Quilpué', 5),

(16, 'Rancagua', 6),
(17, 'San Fernando', 6),
(18, 'Rengo', 6),

(19, 'Talca', 7),
(20, 'Curicó', 7),
(21, 'Linares', 7),

(22, 'Concepción', 8),
(23, 'Talcahuano', 8),
(24, 'Chillán', 8),

(25, 'Temuco', 9),
(26, 'Villarrica', 9),
(27, 'Angol', 9),

(28, 'Puerto Montt', 10),
(29, 'Valdivia', 10),
(30, 'Osorno', 10),

(31, 'Coyhaique', 11),
(32, 'Aysén', 11),
(33, 'Chile Chico', 11),

(34, 'Punta Arenas', 12),
(35, 'Puerto Natales', 12),
(36, 'Porvenir', 12),

(37, 'Santiago', 13),
(38, 'Maipú', 13),
(39, 'La Florida', 13),

(40, 'Valdivia', 14),
(41, 'Panguipulli', 14),
(42, 'La Unión', 14),

(43, 'Arica', 15),
(44, 'Camarones', 15),
(45, 'Putre', 15),

(46, 'Chillán', 16),
(47, 'Quillón', 16),
(48, 'Coelemu', 16);


INSERT INTO candidato (id_candidato, nombre_candidato) VALUES 
(1, 'Donald Trump'),
(2, 'Hillary Clinton'),
(3, 'Jose A Kast'),
(4, 'Gabriel Boric'),
(5, 'Gaspar Bustos');
