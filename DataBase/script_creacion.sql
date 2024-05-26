create schema if not exists gestor_turnos;
use gestor_turnos;

create table if not exists t_roles (
rolId int, /* 0=Adm, 1=Nad, 2=Prf  */
codigoRol varchar(3),  /*Adm-Nad-Prf*/
nombre varchar(50),   /*Adminidtrados-Nadador-Profesor*/
primary key (rolId)
)

create table if not exists t_usuarios (
usuarioId int auto_increment,
email varchar(300) not null,
username varchar(300) not null,
password varchar(300) not null,
activo boolean,
nrotelefono bigint,
fechanacimiento date, /* "AAAA-MM-DD" */
rolId int,
primary key (usuarioId),
constraint FK_usuarios_roles foreign key (rolId) references t_roles (rolId)
);



