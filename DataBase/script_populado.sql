/*Inserto datos en tabla t_roles*/
insert into t_roles (rolId, codigoRol, nombre) values (0, "Adm", "Administrador");
insert into t_roles (rolId, codigoRol, nombre) values (1, "Nad", "Nadador");
insert into t_roles (rolId, codigoRol, nombre) values (2, "Prf", "Profesor");

/*Inserto datos en tabla t_usuarios*/
insert into t_usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("nad@nad.com", "nadador", "nadador", true, 2284604080, "1986-12-14", 1);
insert into t_usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("adm@adm.com", "admin", "admin", true, 2284605070, "1978-01-08", 0);
insert into t_usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("profe@profe.com", "profe", "profe", true, 2284602030, "1981-09-23", 2);




