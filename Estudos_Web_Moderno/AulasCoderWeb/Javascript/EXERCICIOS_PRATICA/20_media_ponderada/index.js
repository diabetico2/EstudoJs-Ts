// ============================================================
// EXERCÍCIO 20 - NÍVEL 2: MÉDIA PONDERADA
// ============================================================
// Objetivo: Crie uma função que receba um array de notas 
// e um array de pesos com mesmo tamanho, e retorne a média ponderada.
//
// Média ponderada = (nota1 * peso1 + nota2 * peso2 + ...) / (peso1 + peso2 + ...)
//
// Dicas:
// - Você precisa multiplicar cada nota pelo seu peso
// - Depois somar tudo
// - Dividir pela soma dos pesos
// - Há um método que pode "combinar" dois arrays
// ============================================================

function calcularMediaPonderada(notas, pesos) {
 const somaMultiplicacoes = notas.reduce()  // Soma as mult.
const somaPesos = pesos.reduce()            // Soma os pesos
return somaMultiplicacoes / somaPesos;
}

// Teste seu código:
 console.log(calcularMediaPonderada([7, 8, 9], [2, 3, 5]));  // ~8.2
// console.log(calcularMediaPonderada([10, 5], [1, 1]));       // 7.5
