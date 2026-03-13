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
// CAMINHO DE RACIOCÍNIO:
// 1. MÉDIA: você precisa SOMAR tudo e DIVIDIR pela quantidade
// 2. Como você soma um array? Qual método?
// 3. SITUACAO: é uma LEITURA que depende da média (>= 7 ou < 7)
// 4. ADICIONAR NOTA: é um MÉTODO que modifica o array interno
// 5. Como você adiciona elemento a um array?
//
// DOCUMENTAÇÃO:
// - Array.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// - Array.push(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// - Getters: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get
//
// EXEMPLO DO CONCEITO:
// Média = resultado total dividido por quantidade
// Getter usa outro getter (média usa soma e quantidade)
// Método modifica os dados internos (.push() adiciona)
// ============================================================

const aluno = {
  _nome: "Maria",
  _notas: [7, 8, 6], 

  get media() {
    const soma = this._notas.reduce(
      (acumulador, valor) => acumulador + valor,
      0,
    );
    const quantidade = this._notas.length;
    const media = soma / quantidade;
    return media;
  },
  get situacao() {
    if (aluno.media >= 7) {
      return "passou";
    } else {
      return "reprovou";
    }
  },
  adicionarNota(v) {
    this._notas.push(v);
  }, 
};

// Teste seu código:
console.log(aluno.media); // 7
console.log(aluno.situacao); // "Aprovado"
aluno.adicionarNota(5);
console.log(aluno.media); // 6.5
console.log(aluno.situacao); // "Reprovado"
