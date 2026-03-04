// ============================================================
// EXERCÍCIO 27 - NÍVEL 3: CONTAR PALAVRAS NO TEXTO
// ============================================================
// Objetivo: Crie uma função que conta quantas vezes cada
// palavra aparece em um texto
//
// Exemplos:
// contarPalavras('gato gato cachorro gato cachorro passaro')
// // { gato: 3, cachorro: 2, passaro: 1 }
//
// contarPalavras('a a a b c c')
// // { a: 3, b: 1, c: 2 }
//
// CAMINHO DE RACIOCÍNIO:
// 1. Separe o texto em palavras: .split(' ')
// 2. Crie um objeto vazio para armazenar contagens
// 3. Para cada palavra, se existe no objeto, incrementa
// 4. Se não existe, cria com valor 1
// 5. Use .reduce() para acumular ou loop manual
//
// DOCUMENTAÇÃO:
// - String.split(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// - Objetos (propriedades): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
//
// EXEMPLO DO CONCEITO:
// Iterar: for (let palavra of palavras)
// Verificar: if (contador[palavra]) incrementa, else inicia em 1
// Retornar objeto com contagens
// ============================================================

function contarPalavras(texto) {
  // Seu código aqui
}

// Teste seu código:
// console.log(contarPalavras('gato gato cachorro gato cachorro passaro'));
// // { gato: 3, cachorro: 2, passaro: 1 }
//
// console.log(contarPalavras('a a a b c c'));
// // { a: 3, b: 1, c: 2 }
//
// console.log(contarPalavras('mundo mundo mundo'));
// // { mundo: 3 }
