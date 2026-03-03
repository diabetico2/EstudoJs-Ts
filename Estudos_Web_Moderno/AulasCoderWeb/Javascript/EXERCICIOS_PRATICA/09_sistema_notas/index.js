// ============================================================
// EXERCÍCIO 09 - NÍVEL 3: SISTEMA DE NOTAS
// ============================================================
// Objetivo: Crie um objeto "aluno" que:
// - Tenha propriedades: _nome, _notas (array)
// - Tenha um getter "media" que calcule a média das notas
// - Tenha um getter "situacao" que retorne:
//   - "Aprovado" se média >= 7
//   - "Reprovado" se média < 7
// - Tenha um método "adicionarNota(nota)" que adicione à array
//
// Dicas:
// - Para média: soma / quantidade
// - Use .reduce() para somar ou .length para contar
// - .push(nota) para adicionar à array
// ============================================================

const aluno = {
  _nome: 'Maria',
  _notas: [7, 8, 6],
  
  // Seu código aqui
};

// Teste seu código:
// console.log(aluno.media);            // 7
// console.log(aluno.situacao);         // "Aprovado"
// aluno.adicionarNota(5);
// console.log(aluno.media);            // 6.5
// console.log(aluno.situacao);         // "Reprovado"
