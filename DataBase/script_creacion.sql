create schema if not exists gestor_turnos;
use gestor_turnos;

create table if not exists t_roles (
rolId int, /* 0=Adm, 1=Nad, 2=Prf  */
nombre varchar(20),   /*Adminidtrados-Nadador-Profesor*/
primary key (rolId)
);

create table if not exists t_usuarios (
usuarioId int auto_increment,
username varchar(300) not null,
password varchar(300) not null,
activo boolean, /*True = Activo - False = Inactivo*/
rolId int,
primary key (usuarioId),
constraint FK_usuarios_roles foreign key (rolId) references t_roles (rolId)
);

create table if not exists t_turnos(
turnoId int auto_increment,
andarivel int,
dia date,
horarioInicio int,
usuarioId int,
presentismo boolean default false,
primary key (turnoId),
constraint FK_turnos_usuarios foreign key (usuarioId) references t_usuarios(usuarioId)
);