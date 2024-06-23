/*******************************Genero Roles********************************************************/
insert into t_roles (rolId, nombre) values (0, "Administrador");
insert into t_roles (rolId, nombre) values (1, "Usuario");
insert into t_roles (rolId, nombre) values (2, "Profesor");
/***************************Inserto Usuario*****************************************/
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador1", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador2", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador3", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador4", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "admin", "$2a$10$VDL3fru3c4f4WN35XGBWE.a8BNHTbMJUQ3p5rtaWjjc68GX8qsDXC", true, 0);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "profe", "$2a$10$Avh6fCdrnoqMJHJXxQvUluPDxc/jKV1lSJ85SNkDHMPIB5mEIOJtO", true, 2);

/*------------------------Inserto Disciplinas------------------------------*/
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Lunes", 8, 4);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Miercoles", 8, 4);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Viernes", 8, 4);

insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Lunes", 19, 4);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Miercoles", 19, 4);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Viernes", 19, 4);

insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Martes", 11, 4);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Jueves", 11, 4);

insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Martes", 14, 4);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Jueves", 14, 4);
/*--------------------Inserto las Disciplinas al Calendario-------------------------------------*/

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 3);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 3);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 3);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 3);

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-24", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-26", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 6);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 6);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 6);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-28", 6);

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 8);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 8);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 8);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 8);

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 10);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 10);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 10);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-27", 10);


/*--------------------Cargo Turnos al Calendario-------------------------------------*/
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 2, 1);
update t_calendario_dia set turno_andarivel2 = 1 where calendarioId = 1;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 3, 2);
update t_calendario_dia set turno_andarivel3 = 2 where calendarioId = 2;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 3, 3);
update t_calendario_dia set turno_andarivel3 = 3 where calendarioId = 3;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 1, 4);
update t_calendario_dia set turno_andarivel1 = 4 where calendarioId = 4;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-25", 11, 1, 5);
update t_calendario_dia set turno_andarivel1 = 5 where calendarioId = 25;
select * from t_calendario_dia tcd join t_disciplina td on tcd.disciplinaId = td.disciplinaId;
/*****************************************************************************************************/

/*****************************************************************************************************/
