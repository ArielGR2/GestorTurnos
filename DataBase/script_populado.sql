insert into roles (codigoRol, nombre) values ("usr", "usuario");
insert into roles (codigoRol, nombre) values ("adm", "administrador");
insert into roles (codigoRol, nombre) values ("prf", "profesor");

insert into usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("user@user.com", "user", "user", 1, 2284604080, "1986-12-14", 1);
insert into usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("adm@adm.com", "admin", "admin", 1, 2284605070, "1978-01-08", 2);
insert into usuarios (email, username , password , activo , nrotelefono, fechanacimiento , rolId  ) values ("profe@profe.com", "profe", "profe", 1, 2284602030, "1981-09-23", 3);