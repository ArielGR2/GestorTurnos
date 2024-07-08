const turnosQueries = {
  
  contarTurnosOcupados:'select count(*) as ocupados from t_turnos where fechaTurno = ? and horaTurno = ? and andarivelSeleccionado = ?;',
  
  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);',

  eliminarTurno: 'delete from t_turnos where fechaTurno = ? and horaTurno = ? and andarivelSeleccionado = ? and usuarioId = ?;',

  muestraTurnoReservadoPorId: 'select fechaTurno, horaTurno, andarivelSeleccionado, usuarioId from t_turnos where usuarioId = ? and fechaTurno = ?;',

  verificarTurnoUsuarioEnFecha: `SELECT COUNT(*) as ocupados FROM t_turnos WHERE usuarioId = ? AND fechaTurno = ?;`,

  muestraTurnosDelDia: `select * from t_turnos where fechaTurno = ?;`,

  cambiarPresentismo: ` update t_turnos set presentismo = false where turnoId = ?; `
  
}

export default turnosQueries;

