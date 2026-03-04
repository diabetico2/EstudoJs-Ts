// ============================================================
// EXERCÍCIO 23 - NÍVEL 2: BUSCAR EM ARRAY
// ============================================================
// Objetivo: Crie uma função que procura um elemento em um array
// e retorna o índice ou -1 se não encontrar
//
// Exemplos:
// buscarElemento([1, 2, 3, 4, 5], 3)  // 2
// buscarElemento([1, 2, 3, 4, 5], 6)  // -1
// buscarElemento(['a', 'b', 'c'], 'b')  // 1
//
// CAMINHO DE RACIOCÍNIO:
// 1. Qual método JavaScript retorna o índice?
// 2. Ele retorna -1 se não encontrar (perfeito!)
// 3. Você pode usar .indexOf() diretamente
// 4. ALTERNATIVA: usando .findIndex() com callback
// 5. ALTERNATIVA: loop manual com break
//
// DOCUMENTAÇÃO:
// - Array.indexOf(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// - Array.findIndex(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// - for loop com break: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break
//
// EXEMPLO DO CONCEITO:
// indexOf() é O método mais simples
// Retorna índice (número positivo) ou -1
// Para busca simples de valores (não objetos)
// ============================================================

function buscarElemento(array, elemento) {
  // Seu código aqui
}

// Teste seu código:
// console.log(buscarElemento([1, 2, 3, 4, 5], 3));      // 2
// console.log(buscarElemento([1, 2, 3, 4, 5], 6));      // -1
// console.log(buscarElemento(['a', 'b', 'c'], 'b'));    // 1
// console.log(buscarElemento(['a', 'b', 'c'], 'd'));    // -1
// console.log(buscarElemento([], 5));                   // -1
