const reportesQueries = {

diaConMasReservas: `select fechaTurno, count(fechaTurno) from t_turnos tt group by fechaTurno order by count(fechaTurno) desc limit 1;`,


turnosPorHoraDia: 'select horaTurno , count(horaTurno) from t_turnos tt where fechaTurno = ? group by horaTurno order by horaTurno asc ;',

nadadorConMasAusencias: 'select  tu.username, tt.usuarioId ,count(presentismo) from t_turnos tt join t_usuarios tu on tt.usuarioId = tu.usuarioId where presentismo = 1 and fechaTurno < ? group by usuarioId order by count(presentismo) desc;',

}

export default reportesQueries;