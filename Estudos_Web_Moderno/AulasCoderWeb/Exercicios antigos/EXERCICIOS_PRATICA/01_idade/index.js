// ============================================================
// EXERCÍCIO 01 - NÍVEL 1: CALCULAR IDADE
// ============================================================
// Objetivo: Crie uma função que receba um ano de nascimento
// e retorne a idade. Use console.log para exibir: "Você tem X anos"
//
// CAMINHO DE RACIOCÍNIO:
// 1. Pense: como você descobre qual é o ano atual?
// 2. Pense: a idade é a diferença entre dois anos
// 3. Qual operação matemática calcula diferença?
// 4. Como você exibe a resposta (console.log)?
//
// DOCUMENTAÇÃO:
// - Date object: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// - getFullYear(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
//
// EXEMPLO DO CONCEITO:
// Imagine: você nasceu em 2004 e estamos em 2026
// Qual é a diferença? Como você calcularia no papel?
// Agora transforme esse raciocínio em código JavaScript
// ============================================================

function calcularIdade(anoNascimento) {
  const ano = new Date().getFullYear();
  const anivers = console.log(ano - anoNascimento);
  return anivers;
}

// Teste seu código:
calcularIdade(2004);
calcularIdade(1990);
