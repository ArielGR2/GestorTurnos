const turnosQueries = {
  
  contarTurnosOcupados:'select count(*) as ocupados from t_turnos where fechaTurno = ? and horaTurno = ? and andarivelSeleccionado = ?;',
  
  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);',

  eliminarTurno: 'delete from t_turnos where fechaTurno = ? and horaTurno = ? and andarivelSeleccionado = ? and usuarioId = ? ;',

  muestraTurnoReservadoPorId: 'select fechaTurno, horaTurno, andarivelSeleccionado, usuarioId from t_turnos where usuarioId = ? and fechaTurno = ?',

  verificarTurnoUsuarioEnFecha: `  SELECT COUNT(*) as ocupados FROM t_turnos WHERE usuarioId = ? AND fechaTurno = ?;`

  // eliminarTurnoById: 'delete from t_turnos tt where turnoId = ? ;',
  
}

export default turnosQueries;

