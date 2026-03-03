// ============================================================
// EXERCÍCIO 08 - NÍVEL 3: CRIAR PESSOA COM GETTERS/SETTERS
// ============================================================
// Objetivo: Crie um objeto "pessoa" que:
// - Tenha propriedades: _nome, _idade
// - Tenha um getter para "idade" que retorne a idade
// - Tenha um setter para "idade" que só aceite números entre 0 e 150
// - Tenha um método "apresentar()" que retorne
//   "Olá, sou NOME e tenho IDADE anos"
//
// Dicas:
// - Use get idade() { return this._idade; }
// - Use set idade(valor) { ... validação ... }
// - A validação deve impedir números inválidos
// ============================================================

const pessoa = {
  _nome: "João",
  _idade: 25,

  get idade() {
    return this._idade;
  },
  set idade(v) {
    if (v > 0 && v < 150) {
      this._idade = v;
    }
  },
  apresentar() {
    return `Olá, sou ${pessoa._nome} e tenho ${pessoa.idade}`;
  },
};

// Teste seu código:
console.log(pessoa.idade); // 25
pessoa.idade = 30;
console.log(pessoa.idade); // 30
pessoa.idade = 200;
console.log(pessoa.idade); // 30 (não mudou)
console.log(pessoa.apresentar()); // "Olá, sou João e tenho 30 anos"
