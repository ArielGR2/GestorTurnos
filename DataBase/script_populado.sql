/*Inserto datos en tabla t_roles*/
insert into t_roles (rolId, codigoRol, nombre) values (0, "Adm", "Administrador");
insert into t_roles (rolId, codigoRol, nombre) values (1, "Nad", "Nadador");
insert into t_roles (rolId, codigoRol, nombre) values (2, "Prf", "Profesor");

/*Inserto datos en tabla t_usuarios*/
insert into t_usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("nad@nad.com", "nadador", "$2a$10$pHMaAG9MGi8IGb0r.bsfiOIv.4p1.b5pjIwURaNmmu0zaelBzbohu", true, 2284604080, "1986-12-14", 1);
insert into t_usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("adm@adm.com", "admin", "$2a$10$VDL3fru3c4f4WN35XGBWE.a8BNHTbMJUQ3p5rtaWjjc68GX8qsDXC", true, 2284605070, "1978-01-08", 0);
insert into t_usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("profe@profe.com", "profe", "$2a$10$Avh6fCdrnoqMJHJXxQvUluPDxc/jKV1lSJ85SNkDHMPIB5mEIOJtO", true, 2284602030, "1981-09-23", 2);




