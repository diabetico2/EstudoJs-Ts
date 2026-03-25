// ============================================================
// EXERCÍCIO 03 - NÍVEL 1: CONVERSÃO DE TEMPERATURA
// ============================================================
// Objetivo: Crie uma função que converta Celsius para Fahrenheit.
//
// Fórmula: F = (C * 9/5) + 32
//
// CAMINHO DE RACIOCÍNIO:
// 1. A fórmula JÁ está dada no enunciado
// 2. Seu trabalho é IMPLEMENTAR ela em código
// 3. Qual operação matemática você precisa para a fórmula?
// 4. Como você arredonda um número para 2 casas decimais?
//
// DOCUMENTAÇÃO:
// - Number.toFixed(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// - Operadores matemáticos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos
//
// EXEMPLO DO CONCEITO:
// Uma fórmula com multiplicação, divisão e adição
// Você segue a ordem normalmente: (x * y) + z
// Depois, você reduz casas decimais se necessário
// ============================================================

function celsiusPFahrenheit(celsius) {
  const fah = (celsius * 9) / 5 + 32;
  return fah.toFixed();
}

// Teste seu código:
console.log(celsiusPFahrenheit(0)); // 32
console.log(celsiusPFahrenheit(100)); // 212
console.log(celsiusPFahrenheit(25)); // 77
