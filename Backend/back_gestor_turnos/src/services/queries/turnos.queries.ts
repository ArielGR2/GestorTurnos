const turnosQueries = {
  
  contarTurnosOcupados:'select count(*) as ocupados from t_turnos tt where tt.fechaTurno = ? and tt.horaTurno = ? and tt.andarivelSeleccionado = ?;',
  
  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);',


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
