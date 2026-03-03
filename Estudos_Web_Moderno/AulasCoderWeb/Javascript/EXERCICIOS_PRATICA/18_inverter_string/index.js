// ============================================================
// EXERCÍCIO 18 - NÍVEL 1: INVERTER STRING
// ============================================================
// Objetivo: Crie uma função que receba uma string e 
// retorne ela invertida.
//
// Exemplo: "Hello" → "olleH"
//
// Dicas:
// - Existem métodos de string que podem ajudar
// - Existem operadores que trabalham com arrays
// - Você pode converter string ↔ array
// ============================================================

function inverterString(texto) {
return texto.split('').reverse().join('')


}

// Teste seu código:
 console.log(inverterString("Hello"));        // "olleH"
 console.log(inverterString("JavaScript"));   // "tpircSavaJ"
 console.log(inverterString("12345"));        // "54321"
