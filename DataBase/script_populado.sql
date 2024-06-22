/*****************************************************************************************************/
insert into t_roles (rolId, nombre) values (0, "Administrador");
insert into t_roles (rolId, nombre) values (1, "Usuario");
insert into t_roles (rolId, nombre) values (2, "Profesor");
/*****************************************************************************************************/
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador1", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador2", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador3", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "nadador4", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 1);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "admin", "$2a$10$VDL3fru3c4f4WN35XGBWE.a8BNHTbMJUQ3p5rtaWjjc68GX8qsDXC", true, 0);
insert into t_usuarios ( username , password , activo , rolId  ) values ( "profe", "$2a$10$Avh6fCdrnoqMJHJXxQvUluPDxc/jKV1lSJ85SNkDHMPIB5mEIOJtO", true, 2);
/*****************************************************************************************************/
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Lunes", 8, 3);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Miercoles", 8, 3);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Viernes", 8, 3);

insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Lunes", 19, 3);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Miercoles", 19, 3);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Viernes", 19, 3);

insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Martes", 11, 3);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Jueves", 11, 3);

insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Martes", 14, 3);
insert into t_disciplina (nombreDisciplina, dia, horarioDeInicioDisciplina, cantidadAlumnosPorAndarivel) values ("Libre", "Jueves", 14, 3);
/*****************************************************************************************************/
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 1);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 2);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 3);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 3);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 3);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 3);

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 4);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 5);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 6);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 6);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 6);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-22", 6);

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 7);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 8);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 8);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 8);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-23", 8);

insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 9);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 10);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 10);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 10);
insert t_calendario_dia (fechaCalendario, disciplinaId) value ("2024-06-25", 10);
/*****************************************************************************************************/
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-22", 8, 2, 1);
update t_calendario_dia set turno_andarivel2 = 1 where calendarioID = 1;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-22", 8, 3, 2);
update t_calendario_dia set turno_andarivel3 = 2 where calendarioID = 2;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-22", 8, 3, 3);
update t_calendario_dia set turno_andarivel3 = 3 where calendarioID = 3;

insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-22", 8, 1, 4);
update t_calendario_dia set turno_andarivel1 = 4 where calendarioID = 4;

select * from t_calendario_dia tcd join t_disciplina td on tcd.disciplinaId = td.disciplinaId;
/*****************************************************************************************************/

/*****************************************************************************************************/
