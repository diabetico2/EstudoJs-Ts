// ============================================================
// EXERCÍCIO 30 - NÍVEL 4: VALIDADOR DE CAMPOS (FORMS)
// ============================================================
// Objetivo: Crie um validador de campos que recebe um objeto
// com dados e regras, validando cada campo
//
// Exemplo:
// const dados = { nome: 'João', email: 'joao@email.com', idade: 25 };
// const regras = {
//   nome: { minLength: 3, maxLength: 50, required: true },
//   email: { required: true, email: true },
//   idade: { min: 18, max: 120, required: true }
// };
//
// validar(dados, regras)
// // { valido: true, erros: {} }
//
// CAMINHO DE RACIOCÍNIO:
// 1. Iterar sobre as regras
// 2. Para cada regra, validar o respectivo campo
// 3. Se não passar, adicionar erro à lista
// 4. Validações possíveis:
//    - required: campo não pode estar vazio
//    - minLength/maxLength: tamanho da string
//    - min/max: valor numérico
//    - email: validar formato de email
// 5. Retornar objeto com status e erros
//
// DOCUMENTAÇÃO:
// - Object.keys(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// - String.length: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
// - Expressões regulares (email): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
//
// EXEMPLO DO CONCEITO:
// Validar cada campo contra suas regras
// Armazenar erros em objeto: { campo: ['erro1', 'erro2'] }
// Retornar { valido: true/false, erros }
// ============================================================

function validar(dados, regras) {
  // Seu código aqui
}

// Teste seu código:
// const dados = { nome: 'João', email: 'joao@email.com', idade: 25 };
// const regras = {
//   nome: { minLength: 3, maxLength: 50, required: true },
//   email: { required: true, email: true },
//   idade: { min: 18, max: 120, required: true }
// };
//
// console.log(validar(dados, regras));
// // { valido: true, erros: {} }
//
// const dadosInvalidos = { nome: 'Jo', email: 'invalido', idade: 15 };
// console.log(validar(dadosInvalidos, regras));
// // { valido: false, erros: {...} }
