// ============================================================
// EXERCÍCIO 30 - NÍVEL 4: VALIDADOR DE CAMPOS
// ============================================================
// Objetivo: Crie um objeto "validador" que:
// - Guarde regras de validação para diferentes tipos de campo
// - Método registrarRegra(nomeCampo, validadores)
//   validadores = { tipo, minimo, maximo, obrigatorio, etc }
// - Método validar(nomeCampo, valor) → retorna true/false
// - Método obterErros(nomeCampo, valor) → retorna array de erros
// - Método validarTodos(objeto) → valida um objeto inteiro
//
// Tipos de validação: 'string', 'number', 'email', 'telefone'
// Propriedades: minimo, maximo, obrigatorio, padrao (regex)
//
// Dicas:
// - Armazene as regras em um objeto
// - Crie funções auxiliares para cada tipo de validação
// - Retorne um array com mensagens de erro
// ============================================================

const validador = {
  // Seu código aqui
};

// Teste seu código:
// validador.registrarRegra('email', { tipo: 'email', obrigatorio: true });
// validador.registrarRegra('idade', { tipo: 'number', minimo: 18, maximo: 100 });
// console.log(validador.validar('email', 'joao@gmail.com'));  // true
// console.log(validador.obterErros('idade', 15));  // ["Idade mínima é 18"]
