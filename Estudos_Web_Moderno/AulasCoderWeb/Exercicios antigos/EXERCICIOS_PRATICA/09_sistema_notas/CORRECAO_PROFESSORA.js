// ============================================================
// CORREÇÃO DO EXERCÍCIO 09 - SISTEMA DE NOTAS
// ============================================================

// SOLUÇÃO COMPLETA:
const aluno = {
  _nome: 'Maria',
  _notas: [7, 8, 6],
  
  get media() {
    const soma = this._notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this._notas.length;
  },
  
  get situacao() {
    return this.media >= 7 ? "Aprovado" : "Reprovado";
  },
  
  adicionarNota(nota) {
    this._notas.push(nota);
  }
};

// ============================================================
// TESTE:
// ============================================================
console.log(aluno.media);             // 7 (7+8+6)/3
console.log(aluno.situacao);          // "Aprovado"
aluno.adicionarNota(5);
console.log(aluno._notas);            // [7, 8, 6, 5]
console.log(aluno.media);             // 6.5 (7+8+6+5)/4
console.log(aluno.situacao);          // "Reprovado"

// ============================================================
// EXPLICAÇÃO: GETTER media
// ============================================================
// 
// get media() {
//   const soma = this._notas.reduce((acc, nota) => acc + nota, 0);
//   return soma / this._notas.length;
// }
//
// Passo a passo para [7, 8, 6]:
// 
// Reduce soma:
// - acc=0, nota=7 → 0+7=7
// - acc=7, nota=8 → 7+8=15
// - acc=15, nota=6 → 15+6=21
// Resultado: 21
//
// Divide pela quantidade:
// 21 / 3 = 7
//
// ============================================================
// EXPLICAÇÃO: GETTER situacao
// ============================================================
// 
// get situacao() {
//   return this.media >= 7 ? "Aprovado" : "Reprovado";
// }
//
// Usa o GETTER media para decidir!
// Getter usando outro getter é perfeito!
//
// IMPORTANTE: this.media chama o getter acima
// (não acessa _media, porque não existe)
//
// ============================================================
// EXPLICAÇÃO: MÉTODO adicionarNota
// ============================================================
// 
// adicionarNota(nota) {
//   this._notas.push(nota);
// }
//
// Adiciona uma nota ao array
// .push() modifica o array ORIGINAL
// Por isso os testes refletem a mudança!
//
// ============================================================
// VERSÃO COM VALIDAÇÃO:
// ============================================================

const alunoMelhor = {
  _nome: 'Carlos',
  _notas: [],
  
  get media() {
    if (this._notas.length === 0) {
      console.log("Nenhuma nota adicionada!");
      return 0;
    }
    const soma = this._notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this._notas.length;
  },
  
  get situacao() {
    if (this._notas.length === 0) {
      return "Sem avaliação";
    }
    return this.media >= 7 ? "Aprovado" : "Reprovado";
  },
  
  adicionarNota(nota) {
    // Validar se é número entre 0 e 10
    if (typeof nota !== 'number') {
      console.log("Erro: nota deve ser número!");
      return false;
    }
    if (nota < 0 || nota > 10) {
      console.log("Erro: nota deve estar entre 0 e 10!");
      return false;
    }
    this._notas.push(nota);
    return true;
  },
  
  obterNotas() {
    return [...this._notas];  // Retorna cópia (não original)
  },
  
  limparNotas() {
    this._notas = [];
  }
};

// Teste:
alunoMelhor.adicionarNota(8);
alunoMelhor.adicionarNota(9);
console.log(alunoMelhor.media);      // 8.5
console.log(alunoMelhor.situacao);   // "Aprovado"

// ============================================================
// IMPORTANTE: .push() vs SPREAD OPERATOR
// ============================================================
// 
// this._notas.push(nota);     ← Modifica array original
// [...this._notas, nota]      ← Cria novo array
//
// Qual usar?
// - .push() se quer modificar original
// - Spread se quer novo array (imutabilidade)
//
// ============================================================
// ALTERNATIVA: Usar método para retornar notas
// ============================================================

const alunoImutavel = {
  _nome: 'Ana',
  _notas: [7, 8, 6],
  
  get media() {
    const soma = this._notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this._notas.length;
  },
  
  get situacao() {
    return this.media >= 7 ? "Aprovado" : "Reprovado";
  },
  
  // Retorna NOVO array (não modifica original)
  adicionarNota(nota) {
    return {
      ...this,
      _notas: [...this._notas, nota]
    };
  }
};

// ============================================================
// DIFERENÇAS IMPORTANTES:
// ============================================================
// 
// VERSÃO 1 (Muta o original):
// const al1 = { _notas: [7, 8] };
// al1.adicionarNota(9);  ← Modifica al1
// // al1._notas agora é [7, 8, 9]
//
// VERSÃO 2 (Immutável):
// const al2 = { _notas: [7, 8] };
// const al3 = al2.adicionarNota(9);  ← Cria novo objeto
// // al2._notas ainda é [7, 8]
// // al3._notas é [7, 8, 9]
//
// Imutabilidade é bom para:
// - Evitar bugs sutis
// - React, Redux, etc.
// - Programação funcional
//
// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Getter que usa reduce() para acumular
// ✅ Getter que usa outro getter
// ✅ Método que modifica array com .push()
// ✅ Validação de dados antes de inserir
// ============================================================
