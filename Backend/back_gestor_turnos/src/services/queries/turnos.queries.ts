const turnosQueries = {
  
  contarTurnosOcupados:'select count(*) as ocupados from t_turnos tt where tt.fechaTurno = ? and tt.horaTurno = ? and tt.andarivelSeleccionado = ?;',
  
  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);',

  eliminarTurno: 'delete from t_turnos tt where tt.fechaTurno = ? and tt.horaTurno = ? and tt.andarivelSeleccionado = ? and tt.usuarioId=? ;',

  muestraTurnoReservadoPorId: 'select * from t_turnos tt where usuarioId = ? and fechaTurno = ?',
}

export default turnosQueries;

