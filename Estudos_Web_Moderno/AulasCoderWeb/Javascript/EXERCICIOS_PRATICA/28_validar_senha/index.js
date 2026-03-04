// ============================================================
// EXERCÍCIO 28 - NÍVEL 4: VALIDAR SENHA FORTE
// ============================================================
// Objetivo: Crie uma função que valida se uma senha é forte
//
// Uma senha FORTE deve ter:
// - Mínimo 8 caracteres
// - Pelo menos uma letra MAIÚSCULA
// - Pelo menos uma letra minúscula
// - Pelo menos um NÚMERO
// - Pelo menos um caractere ESPECIAL (!@#$%^&*)
//
// Retorna:
// - true se passa em TODOS os critérios
// - Ou um objeto com detalhes do que falta
//
// CAMINHO DE RACIOCÍNIO:
// 1. Validar tamanho: .length >= 8
// 2. Validar maiúscula: /[A-Z]/.test(senha)
// 3. Validar minúscula: /[a-z]/.test(senha)
// 4. Validar número: /[0-9]/.test(senha)
// 5. Validar especial: /[!@#$%^&*]/.test(senha)
// 6. Acumular resultados e retornar
//
// DOCUMENTAÇÃO:
// - Expressões regulares: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// - RegExp.test(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// - String.length: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// EXEMPLO DO CONCEITO:
// /[A-Z]/ testa se tem letra maiúscula
// /[0-9]/ testa se tem número
// Usar .test() retorna true/false
// Armazenar resultados em objeto e retornar
// ============================================================

function validarSenha(senha) {
  // Seu código aqui
}

// Teste seu código:
// console.log(validarSenha('abc123'));  // false (maiúscula, especial, tamanho)
// console.log(validarSenha('Abc12345'));  // false (especial)
// console.log(validarSenha('Abc12345!'));  // true
// console.log(validarSenha('PASSWORD123!'));  // false (minúscula)
// console.log(validarSenha('Pass1!'));  // false (tamanho < 8)
