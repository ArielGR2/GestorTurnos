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

insert into t_turnos (usuarioId, andarivel,  dia, horarioInicio) values (1, 1, sysdate(), 8);
insert into t_turnos (usuarioId, andarivel,  dia, horarioInicio) values (2, 1, sysdate(), 8);
insert into t_turnos (usuarioId, andarivel,  dia, horarioInicio) values (3, 2, sysdate(), 9);
insert into t_turnos (usuarioId, andarivel,  dia, horarioInicio) values (4, 2, sysdate(), 10);
insert into t_turnos (usuarioId, andarivel,  dia, horarioInicio) values (5, 3, sysdate(), 11);
insert into t_turnos (usuarioId, andarivel,  dia, horarioInicio) values (5, 3, "2024-06-17", 16);

/*****************************************************************************************************/