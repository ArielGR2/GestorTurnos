create schema if not exists gestor_turnos;
use gestor_turnos;

create table if not exists t_roles (
rolId int NOt null, 
nombre varchar(20) NOT null,   
primary key (rolId)
);

create table if not exists t_usuarios (
usuarioId int auto_increment NOT null,
username varchar(300) not null,
password varchar(300) not null,
activo boolean DEFAULT true, 
rolId int NOT null,
primary key (usuarioId),
constraint FK_usuarios_roles foreign key (rolId) references t_roles (rolId)
);

create table if not exists t_turnos(
turnoId int auto_increment NOT null,
fechaTurno date NOT NULL, 
horaTurno int NOT null, 
andarivelSeleccionado int NOT null, 
usuarioId int NOT null,
presentismo boolean default true, 
primary key (turnoId),
constraint FK_turnos_usuarios foreign key (usuarioId) references t_usuarios(usuarioId)
);

