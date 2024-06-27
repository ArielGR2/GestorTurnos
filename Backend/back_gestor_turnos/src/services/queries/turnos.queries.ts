const turnosQueries = {
  
  contarTurnosOcupados:'select count(*) as ocupados from t_turnos tt where tt.fechaTurno = ? and tt.horaTurno = ? and tt.andarivelSeleccionado = ?;',
  
  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);',

  eliminarTurno: 'delete from t_turnos tt where tt.fechaTurno = ? and tt.horaTurno = ? and tt.andarivelSeleccionado = ? and tt.usuarioId=? ;',

  
}

export default turnosQueries;

