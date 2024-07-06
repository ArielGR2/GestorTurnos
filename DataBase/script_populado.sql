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


/*--------------------Cargo Turnos -------------------------------------*/
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 2, 1);
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 3, 2);
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 3, 3);
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-24", 8, 1, 4);
insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value ("2024-06-25", 11, 1, 5);


/*****************************************************************************************************/

