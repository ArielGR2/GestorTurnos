create schema if not exists gestor_turnos;

use gestor_turnos;

create table if not exists roles (
rolId int auto_increment,
codigoRol varchar(3),
nombre varchar(50),
primary key (rolId)
)

create table if not exists usuarios (
usuarioId int auto_increment,
email varchar(300) not null,
username varchar(300),
password varchar(300),
activo boolean,
nrotelefono bigint,
fechanacimiento date,
rolId int,
primary key (usuarioId),
constraint FK_usuarios_roles foreign key (rolId) references roles (rolId)
);