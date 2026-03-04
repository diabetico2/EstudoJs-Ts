// ============================================================
// EXERCÍCIO 24 - NÍVEL 2: CONVERSOR DE TEMPERATURA
// ============================================================
// Objetivo: Crie um conversor de temperatura que converte
// entre Celsius, Fahrenheit e Kelvin
//
// Fórmulas:
// C → F: (C * 9/5) + 32
// C → K: C + 273.15
// F → C: (F - 32) * 5/9
// K → C: K - 273.15
// 
// Exemplos:
// converterTemp(25, 'C', 'F')  // 77
// converterTemp(77, 'F', 'C')  // 25
// converterTemp(25, 'C', 'K')  // 298.15
//
// CAMINHO DE RACIOCÍNIO:
// 1. Você pode converter para Celsius como intermediário
// 2. Depois de Celsius para unidade destino
// 3. Use switch/case ou if/else para escolher conversão
// 4. Valide as unidades (C, F, K são válidas?)
// 5. Retorne arredondado em 2 casas decimais
//
// DOCUMENTAÇÃO:
// - switch statement: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch
// - Number.toFixed(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// - Operadores aritméticos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos
//
// EXEMPLO DO CONCEITO:
// Você pode criar variável intermediária (celsius)
// switch(de) converte para celsius
// switch(para) converte de celsius para destino
// Retorna com .toFixed(2)
// ============================================================

function converterTemp(valor, de, para) {
  // Seu código aqui
}

// Teste seu código:
// console.log(converterTemp(25, 'C', 'F'));     // 77
// console.log(converterTemp(77, 'F', 'C'));     // 25
// console.log(converterTemp(25, 'C', 'K'));     // 298.15
// console.log(converterTemp(0, 'C', 'F'));      // 32
// console.log(converterTemp(100, 'C', 'F'));    // 212 (ponto de ebulição)
