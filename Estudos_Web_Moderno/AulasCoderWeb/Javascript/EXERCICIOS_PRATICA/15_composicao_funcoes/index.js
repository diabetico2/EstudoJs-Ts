// ============================================================
// EXERCÍCIO 15 - NÍVEL 4: COMPOSIÇÃO DE FUNÇÕES
// ============================================================
// Objetivo: Crie uma função que COMBINA duas funções
// A função retornada executa uma depois da outra
//
// Exemplo:
// const adicionar2 = x => x + 2;
// const multiplicarPor3 = x => x * 3;
// const composta = compor(adicionar2, multiplicarPor3);
// composta(5)  // (5 + 2) * 3 = 21
//
// CAMINHO DE RACIOCÍNIO:
// 1. Você recebe DUAS funções como parâmetros
// 2. Você retorna UMA NOVA FUNÇÃO (função que retorna função!)
// 3. Essa nova função recebe um valor
// 4. Ela aplica a primeira função: f1(valor)
// 5. Depois aplica a segunda função no resultado: f2(resultado)
// 6. Retorna o resultado final
//
// DOCUMENTAÇÃO:
// - Arrow functions: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// - Retornando funções: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions
// - Closures: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
//
// EXEMPLO DO CONCEITO:
// Uma função que retorna função:
// const meuCompose = (f1, f2) => {
//   return (valor) => {
//     // aplicar funções em sequência
//   };
// };
// A função retornada tem acesso a f1 e f2 (closure!)
// ============================================================

function compor(f1, f2) {
  // Seu código - retorna uma função
}

// Teste seu código:
// const adicionar2 = x => x + 2;
// const multiplicarPor3 = x => x * 3;
//
// const composta = compor(adicionar2, multiplicarPor3);
// console.log(composta(5));   // (5 + 2) * 3 = 21
//
// const elevar2 = x => x ** 2;
// const composta2 = compor(multiplicarPor3, elevar2);
// console.log(composta2(5));  // (5 * 3) ** 2 = 225
//
// const subtrair1 = x => x - 1;
// const composta3 = compor(subtrair1, adicionar2);
// console.log(composta3(10)); // (10 - 1) + 2 = 11
