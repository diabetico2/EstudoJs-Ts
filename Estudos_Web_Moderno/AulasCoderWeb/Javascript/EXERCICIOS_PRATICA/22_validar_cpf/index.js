// ============================================================
// EXERCÍCIO 22 - NÍVEL 4: VALIDAR CPF
// ============================================================
// Objetivo: Crie uma função que valida um CPF brasileiro
//
// Regras de um CPF válido:
// 1. Deve ter exatamente 11 dígitos
// 2. Não pode ser todos os números repetidos (ex: 111.111.111-11)
// 3. Tem um algoritmo de verificação com dígitos verificadores
//
// Para simplicidade, valide apenas:
// - 11 dígitos (remover pontos e traços)
// - Não ser tudo repetido
//
// Exemplos:
// validarCPF('123.456.789-10')  // false (dígitos verificadores estão errados)
// validarCPF('111.111.111-11')  // false (todos iguais)
// validarCPF('123.456.789-00')  // false (menos de 11)
// validarCPF('12345678910')     // pode ser true/false (depende do algoritmo)
//
// CAMINHO DE RACIOCÍNIO:
// 1. Remove pontos e traços: .replace(/[^0-9]/g, '')
// 2. Verifica se tem exatamente 11 dígitos
// 3. Verifica se não são todos iguais
// 4. (Opcional) Implementa o algoritmo de validação
// 5. Retorna true se passa em tudo
//
// DOCUMENTAÇÃO:
// - String.replace(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// - Expressões regulares: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// - Set (para verificar repetição): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
//
// EXEMPLO DO CONCEITO:
// cpf.replace(/[^0-9]/g, '') remove tudo que não é número
// string.length === 11 verifica tamanho
// new Set(cpf).size === 1 significa todos iguais
// ============================================================

function validarCPF(cpf) {
  // Seu código aqui
}

// Teste seu código:
// console.log(validarCPF('123.456.789-10'));   // false
// console.log(validarCPF('111.111.111-11'));   // false (todos iguais)
// console.log(validarCPF('123.456.789-00'));   // false (menos de 11)
// console.log(validarCPF('12345678910'));      // false (inválido)
