// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 - tresHoras - umDia);
// console.log(data.toString());
// 
const data = new Date('2019-04-14T20:20:58')
console.log(data.toString());
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('min', data.getMinutes())
console.log('seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 = domingo, 6 = sabado
console.log(Date.now())