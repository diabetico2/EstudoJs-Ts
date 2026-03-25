// ============================================================
// EXERCÍCIO 02 - NÍVEL 1: VALIDAR EMAIL
// ============================================================
// Objetivo: Crie uma função que receba uma string e retorne
// true se contiver "@" e ".", false caso contrário.
//
// CAMINHO DE RACIOCÍNIO:
// 1. Pense: o que caracteriza um email?
// 2. Pense: quais caracteres são OBRIGATÓRIOS?
// 3. Como você verifica se uma string contém um caractere?
// 4. Como você combina duas verificações (precisa dos DOIS)?
//
// DOCUMENTAÇÃO:
// - String.includes(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// - Operador &&: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_AND
//
// EXEMPLO DO CONCEITO:
// Um email válido tem traços específicos
// Você precisa verificar SE AMBAS as condições são verdadeiras
// .includes() retorna true/false
// && combina verificações (todas precisam ser true)
// ============================================================

function validarEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}

// Teste seu código:
console.log(validarEmail("joao@gmail.com")); // true
console.log(validarEmail("joaomail.com")); // false
console.log(validarEmail("joao@.com")); // true
