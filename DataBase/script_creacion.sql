create schema if not exists gestor_turnos;
use gestor_turnos;

create table if not exists t_roles (
rolId int, /* 0=Adm, 1=Nad, 2=Prf  */
nombre varchar(20),   /*Adminidtrados-Nadador-Profesor*/
primary key (rolId)
);

create table if not exists t_usuarios (
usuarioId int auto_increment,
email varchar(300) not null,
username varchar(300) not null,
password varchar(300) not null,
activo boolean,
nrotelefono bigint, /*Borrar no le vamos a dar utilidad*/
categoriaId int,
rolId int,
primary key (usuarioId),
constraint FK_usuarios_roles foreign key (rolId) references t_roles (rolId),
constraint FK_usuarios_categorias foreign key (categoriaId) references t_categorias (categoriaId)
);

create table if not exists t_categorias (
categoriaId int,
descripcion varchar(20), /*Principantes - Libre - Master - Mayores  */
primary key (categoriaId)
);

create table if not exists t_andarivel (
andarivelId int, /*Andarivel: 1-2-3-4 */
descripcion int, /*Borrar no tiene sentido*/
capacidad_maxima int, /*1 2 3*/
primary key (andarivelId)
);

create table if not exists t_turnos(
turnoId int auto_increment,
usuarioId int,
andarivelId int, /*1 2 3 4*/
categoriaId int, 
dia date,
horarioInicio int,
horarioFin int,
presente boolean default false,
primary key (turnoId),
constraint FK_turnos_usuarios foreign key (usuarioId) references t_usuarios(usuarioId),
constraint FK_turnos_categorias foreign key (categoriaId) references t_categorias(categoriaId),
constraint FK_turnos_andarivel foreign key (andarivelId) references t_andarivel(andarivelId)
);

create table if not exists t_reserva (
reservaId int auto_increment,
turnoId int, 
usuarioId int, 
estado boolean default false, 
primary key (reservaId),
constraint FK_reserva_turno foreign key (turnoId) references t_turnos(turnoId),
constraint FK_reserva_usuarios foreign key (usuarioId) references t_usuarios(usuarioId)
);

create table if not exists t_reportes (
reporteId int,
tipo_reporte varchar(20), /*Ocupacion - Presentismo - Reservas */
fecha_de_generacion date,
contenido varchar(500), /*SQL o Texto del reporte a devolver*/
primary key (reporteId)
);
