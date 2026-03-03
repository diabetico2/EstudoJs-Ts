// ============================================================
// EXERCÍCIO 03 - NÍVEL 1: CONVERSÃO DE TEMPERATURA
// ============================================================
// Objetivo: Crie uma função que converta Celsius para Fahrenheit.
//
// Fórmula: F = (C * 9/5) + 32
//
// Dicas:
// - Siga a fórmula exatamente
// - O parâmetro é em Celsius, retorne em Fahrenheit
// - Arredonde para 2 casas decimais (use .toFixed())
// ============================================================

function celsiusPFahrenheit(celsius) {
  const fahr = (celsius * 9/5) + 32
  return fahr.toFixed(2)
}

// Teste seu código:
 console.log(celsiusPFahrenheit(0));    // 32
 console.log(celsiusPFahrenheit(100));  // 212
 console.log(celsiusPFahrenheit(25));   // 77
