/*****************************************************************************************************/
/*1 Inserto datos en tabla t_roles*/
insert into t_roles (rolId, nombre) values (0, "Administrador");
insert into t_roles (rolId, nombre) values (1, "Usuario");
insert into t_roles (rolId, nombre) values (2, "Profesor");

select * from t_roles tr;
/*****************************************************************************************************/
/*2 Inserto datos en tabla t_usuarios*/
insert into t_usuarios (email, username , password , activo , nrotelefono, rolId  ) values ("nad@nad.com", "nadador", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 2284604080, 1);
insert into t_usuarios (email, username , password , activo , nrotelefono, rolId  ) values ("adm@adm.com", "admin", "$2a$10$VDL3fru3c4f4WN35XGBWE.a8BNHTbMJUQ3p5rtaWjjc68GX8qsDXC", true, 2284605070, 0);
insert into t_usuarios (email, username , password , activo , nrotelefono, rolId  ) values ("profe@profe.com", "profe", "$2a$10$Avh6fCdrnoqMJHJXxQvUluPDxc/jKV1lSJ85SNkDHMPIB5mEIOJtO", true, 2284602030, 2);

select * from t_usuarios tu;
/*****************************************************************************************************/
/*3 Inserto datos en tabla t_categorias*/
insert into t_categorias (categoriaId, descripcion) values (1, "Principiantes");
insert into t_categorias (categoriaId, descripcion) values (2, "Libre");	
insert into t_categorias (categoriaId, descripcion) values (3, "Master");	
insert into t_categorias (categoriaId, descripcion) values (4, "Mayores");	

select * from t_categorias tc;
/*****************************************************************************************************/
/*4 Inserto datos en tabla t_andariveles*/
insert into t_andarivel (andarivelId, descripcion, capacidad_maxima) values (1, 1, 4);
insert into t_andarivel (andarivelId, descripcion, capacidad_maxima) values (2, 1, 3);
insert into t_andarivel (andarivelId, descripcion, capacidad_maxima) values (3, 1, 2);
insert into t_andarivel (andarivelId, descripcion, capacidad_maxima) values (4, 1, 2);

select * from t_andarivel ta;
/*****************************************************************************************************/
/*5 Inserto datos en tabla t_turnos*/
insert into t_turnos (usuarioId, andarivelId, categoriaId, dia, horarioInicio, horarioFin, presente) values (1, 1, 1, "2014-08-07", 17, 18, true);
insert into t_turnos (usuarioId, andarivelId, categoriaId, dia, horarioInicio, horarioFin, presente) values (5, 1, 1, "2014-08-07", 17, 18, true);
insert into t_turnos (usuarioId, andarivelId, categoriaId, dia, horarioInicio, horarioFin, presente) values (6, 1, 1, "2014-08-07", 17, 18, true);
insert into t_turnos (usuarioId, andarivelId, categoriaId, dia, horarioInicio, horarioFin, presente) values (7, 2, 1, "2014-08-07", 17, 18, true);
insert into t_turnos (usuarioId, andarivelId, categoriaId, dia, horarioInicio, horarioFin, presente) values (8, 2, 1, "2014-08-07", 17, 18, true);
insert into t_turnos (usuarioId, andarivelId, categoriaId, dia, horarioInicio, horarioFin, presente) values (9, 3, 1, "2014-08-07", 17, 18, true);

select * from t_turnos tt ;
/*****************************************************************************************************/
/*6 Inserto datos en tabla t_turnos*/
insert into t_reserva (turnoId, UsuarioId, estado) values (1, 1, true);
insert into t_reserva (turnoId, UsuarioId, estado) values (2, 5, true);
insert into t_reserva (turnoId, UsuarioId, estado) values (3, 8, true);

select * from t_reserva tr;
/*****************************************************************************************************/
/*7 Inserto datos en tabla t_reportes*/
insert into t_reportes (reporteId, tipo_reporte, fecha_de_generacion, contenido) values (1, "Ocupacion", "24-06-16", "Vista_Repo_Ocupacion");
insert into t_reportes (reporteId, tipo_reporte, fecha_de_generacion, contenido) values (2, "Presentismo", "24-06-16", "Vista_Repo_Presentismo");
insert into t_reportes (reporteId, tipo_reporte, fecha_de_generacion, contenido) values (3, "Reservas", "24-06-16", "Vista_Repo_Reservas");
insert into t_reportes (reporteId, tipo_reporte, fecha_de_generacion, contenido) values (4, "Turnos", "24-06-16", "Vista_Repo_Turnos");

select * from t_reportes tr; 
/*****************************************************************************************************/