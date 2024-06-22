create schema if not exists gestor_turnos;
use gestor_turnos;

create table if not exists t_roles (
rolId int NOt null, /* 0=Adm, 1=Nad, 2=Prf  */
nombre varchar(20) NOT null,   /*Adminidtrados-Nadador-Profesor*/
primary key (rolId)
);

create table if not exists t_usuarios (
usuarioId int auto_increment NOT null,
username varchar(300) not null,
password varchar(300) not null,
activo boolean DEFAULT true, /*True = Activo - False = Inactivo*/
rolId int NOT null,
primary key (usuarioId),
constraint FK_usuarios_roles foreign key (rolId) references t_roles (rolId)
);

CREATE TABLE IF NOt exists t_disciplina (
disciplinaId int auto_increment,
nombreDisciplina varchar(20) default "Sin Disciplina", /*Libre - Master - Aquagym*/
dia varchar(10) NOT null, /*De Lunes a Sabado*/
horarioDeInicioDisciplina int, /*Horario de inicio de la disciplina*/ 
cantidadAlumnosPorAndarivel int NOT null, /*Al momento de cargar la disciplina definir cant alumno para cada una de ellas por andarivel*/
primary key (disciplinaId)
);

create table if not exists t_turnos(
turnoId int auto_increment NOT null,
fechaTurno date NOT NULL, /*Fecha actual tomada de la pantalla del front tipo: 26/10/24*/
horaTurno int NOT null, /*Se toma del front de la seleccion del usuario*/
andarivelSeleccionado int NOT null, /*Se toma del front segun la seleccion del ususario 1 2 3 4*/
usuarioId int NOT null,
presentismo boolean default true, /*Usaremos este dato a posterior del turno para evaluar presentismo. False = Ausente - True = Presente*/
/*Si el usuario no va, se pasa a False*/
primary key (turnoId),
constraint FK_turnos_usuarios foreign key (usuarioId) references t_usuarios(usuarioId)
/*Cada vez que tome 1 turno, debemos llamar a un metodo Update Calendario y modificar disponibilidad en andarivel -1*/
);

create table if not exists t_calendario_dia(
calendarioId int auto_increment NOT null,
fechaCalendario date NOT NULL, /*El calendario lo tenemos que tener creado previamente por 1 mes*/
horarioAperturaPileta int NOT NULL, /*7 am*/
horarioCierrePileta int NOT NULL, /*22 pm*/
turno_andarivel1 int,
turno_andarivel2 int,
turno_andarivel3 int,
disciplinaId int,
primary key (calendarioId),
constraint FK_calendarioAndarivel1_turno foreign key (turno_andarivel1) references t_turnos(turnoId),
constraint FK_calendarioAndarivel2_turno foreign key (turno_andarivel2) references t_turnos(turnoId),
constraint FK_calendarioAndarivel3_turno foreign key (turno_andarivel3) references t_turnos(turnoId),
constraint FK_calentario_disciplina foreign key (disciplinaId) references t_disciplina(disciplinaId)
);