const turnosQueries = {

  contarTurnosOcupados: 'select count(*) as ocupados from t_turnos where fechaTurno = ? and horaTurno = ? and andarivelSeleccionado = ?;',

  reservaTurno: 'insert into t_turnos (fechaTurno, horaTurno, andarivelSeleccionado, usuarioId) value (?, ?, ?, ?);',

  eliminarTurno: 'delete from t_turnos where fechaTurno = ? and horaTurno = ? and andarivelSeleccionado = ? and usuarioId = ?;',

  eliminarTurnoPorId : 'delete from t_turnos where turnoId = ?;',

  muestraTurnoReservadoPorId: 'select fechaTurno, horaTurno, andarivelSeleccionado, usuarioId from t_turnos where usuarioId = ? and fechaTurno = ?;',

  verificarTurnoUsuarioEnFecha: `SELECT COUNT(*) as ocupados FROM t_turnos WHERE usuarioId = ? AND fechaTurno = ?;`,
  
  cambiarPresentismo: `UPDATE t_turnos SET presentismo = ? WHERE turnoId = ?;`,

  sumarPersonasDelDia: `select count(fechaTurno) from t_turnos ;`,

  muestraTurnosDelDia: `select  tt.turnoId, tt.fechaTurno, tt.horaTurno, tt.andarivelSeleccionado, tt.usuarioId,  tt.presentismo, tu.username  from t_turnos tt join t_usuarios tu on tt.usuarioId = tu.usuarioId where fechaTurno = ? order by tt.horaTurno; `,

}

export default turnosQueries;

