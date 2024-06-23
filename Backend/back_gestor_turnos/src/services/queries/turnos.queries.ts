const turnosQueries = {
  //En caso de no poder conseguir los turnos libres por dia, ver la forma de retornar la ocupacion y tomar el 0 como indicador de que no se pueden reservar mas turnos
  //'Partiendo de la fecha en que el usuario este viendo en la pantalla// definir la query correcta para traer de la tabla la cantidad de turnos libres para visualizar en el front y que el usuario sepa que esos son los que puede reservar - Aqui deberiamos tener algun SELECT COUNT para agrupar los turnos de un mismo dia + mismo andarivel + misma hora;'
  getAllTurnosLibresPorDia: 'select count(*) from t_calendario_dia tcd join t_disciplina td on tcd.disciplinaId  = td.disciplinaId where tcd.fechaCalendario like  "2024-06-24" and tcd.turno_andarivel3 is null and td.horarioDeInicioDisciplina = 8;',

  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);'
  ,
  /*turno_andarivel = ?*/obtenerUltimoTurnoId: 'select turnoId from t_turnos tt where fechaTurno = "2024-06-25" and horaTurno = 11 and andarivelSeleccionado = 1 and usuarioId  = 5;',
  /*calendarioID = 25*/obtenerIdCalendario: 'select calendarioId from t_calendario_dia tcd join t_disciplina td on tcd.disciplinaId = td.disciplinaId where td.horarioDeInicioDisciplina = 8 and tcd.fechaCalendario = "2024-06-24" and tcd.turno_andarivel2 is null limit 1;',

  actualizarTablaCalendario: 'update t_calendario_dia set turno_andarivel1 = ? where calendarioId = ?;',

  
  obtenerTurnosPorUsuarioId: 'Con el Id del usuario vamos a la base de datos y listamos todos los turnos reservados que tiene y AGREGAMOS EL ID;',

  modificarTurnoById: 'En el front primero tenemos que permitir que el usuario vea sus propios turnos (obtenerTurnosPorUsuarioId) y viendolos debe poder selecionar 1 (eso nos dara el IDdelTurnoSeleccionado) con el TurnoId ir a la base de datos y actualizar el turno con todos los nuevos datos que nos llegan en el DTO desde el FRONT obtenidos  por el componente para actualizar - Importante el turnoID deberia ser el mismo o uno nuevo?;',


  eliminarTurno: 'definir la query correcta;',
}

export default turnosQueries;


//GUIA DE QUERYS

// insert: 'insert into actores (nombreCompleto) values (?);',
//   selectAll: 'select * from actores;',
//   selectById: 'select * from actores where actorId = ?',
//   update: 'update actores set nombreCompleto = ? where actorId = ?;',
//   deleteById: 'delete from actores where actorId = ?;',

//   insert: 'insert into generos (generoId, nombreGenero) values (?, ?);',
//   selectAll: 'select generoId, nombre from generos;',
//   update: 'update generos set nombre = ? where generoId = ?;',
//   delete: 'delete from generos where generoId = ?;',

//   insert: 'insert into peliculas (peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento) values (?, ?,?,?,?,?);',
//   selectAll: 'select peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento from peliculas;',
//   selectById: 'select peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento from peliculas where peliculaId = ?;',
//   update: 'update peliculas set titulo = ? where peliculaId = ?;',
//   deleteById: 'delete from peliculas where peliculaId = ?;',
//   selectActores:  'select a.nombreCompleto from papeles p join actores a on p.actorId = a.actorId where p.peliculaId = ?;'
