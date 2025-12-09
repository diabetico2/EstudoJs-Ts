// EXERCICIO 1: ENTENDENDO O MULTIPLO DE 5 (EXEMPLO PRONTO)
// Para arredondar, precisamos saber qual e o PROXIMO multiplo de 5.
// Exemplo: Se a nota e 38, o proximo multiplo de 5 e 40.
// Se a nota e 81, o proximo multiplo de 5 e 85.

const nota = 38;

// 1. Math.ceil(nota / 5) - Arredonda a divisao para cima (38/5 = 7.6 -> vira 8)
// 2. Multiplica por 5 de novo (8 * 5 = 40)

const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;

console.log("Nota: " + nota);
console.log("Proximo Multiplo: " + proximoMultiploDe5);
console.log("Diferenca: " + (proximoMultiploDe5 - nota));
