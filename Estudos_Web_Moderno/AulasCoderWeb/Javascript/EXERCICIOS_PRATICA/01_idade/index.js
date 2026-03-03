// ============================================================
// EXERCÍCIO 01 - NÍVEL 1: CALCULAR IDADE
// ============================================================
// Objetivo: Crie uma função que receba um ano de nascimento
// e retorne a idade.
// Use console.log para exibir: "Você tem X anos"
//
// Dicas:
// - Use a data atual para pegar o ano (Date)
// - Subtraia o ano de nascimento do ano atual
// - Lembre-se que a idade pode ser aproximada
// ============================================================

function calcularIdade(anoNascimento) {
  const date = new Date();
  let anoAtual = date.getFullYear();
  return anoAtual - anoNascimento;
}

// Teste seu código:
console.log(calcularIdade(2004));
console.log(calcularIdade(1990));
