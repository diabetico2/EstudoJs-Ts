// const tresHoras = 60 * 60 * 3 * 1000; // três horas em milissegundos
// const umDia = 60 * 60 * 24 * 1000; // um dia em milissegundos
// const dataAtual = new Date();
// console.log(dataAtual.getTime());
// const data = new Date(0); // 1 de janeiro de 1970 00:00:00 UTC
// console.log(data.toString());
// const data2 = new Date(tresHoras); // 1 de janeiro de 1970 03:00:00 UTC
// console.log(data2.toString());
// const data3 = new Date(2024, 5, 20, 15, 14, 27, 500); // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo, Milissegundo
// console.log(data3.toString());
const data3 = new Date('2024-06-20T15:14:27.500Z'); // Formato ISO 8601
console.log(data3.toString());

console.log('Dia', data3.getDate());
console.log('Mês', data3.getMonth() + 1);
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Minuto', data3.getMinutes());
console.log('Segundo', data3.getSeconds());
console.log('Milissegundo', data3.getMilliseconds());
console.log('Dia da semana', data3.getDay()); // 0 (Domingo) a 6 (Sábado)
console.log(Date.now()); // Timestamp atual em milissegundos

// Formatação da data
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = data.getFullYear();
  const hora = zeroAEsquerda(data.getHours());
  const minuto = zeroAEsquerda(data.getMinutes());
  const segundo = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
console.log(formataData(data3));
    