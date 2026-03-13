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
// CAMINHO DE RACIOCÍNIO:
// 1. GETTER: você acessa como LEITURA (pessoa.idade)
// 2. SETTER: você acessa como ESCRITA (pessoa.idade = 30)
// 3. No setter, você VALIDA antes de aceitar
// 4. MÉTODO: é uma função que você CHAMA (pessoa.apresentar())
// 5. 'this' refere-se ao próprio objeto
//
// DOCUMENTAÇÃO:
// - Getters: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get
// - Setters: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/set
// - this keyword: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
//
// EXEMPLO DO CONCEITO:
// get: quando você LÊ => retorna um valor
// set: quando você ESCREVE => processa e armazena
// Validação: verifique se o valor é aceitável antes de atribuir
// ============================================================

const pessoa = {
  _nome: "João",
  _idade: 25,

  get idade() {
    return this._idade;
  },
  set idade(vt) {
    if (vt >= 0 && vt < 150) {
      this._idade = vt;
    } else {
      console.log("idade invalida");
    }
  },
  apresentar() {
    return `Olá, sou ${this._nome} e tenho ${pessoa.idade}`;
  },
};

// Teste seu código:
console.log(pessoa.idade); // 25
pessoa.idade = 30;
console.log(pessoa.idade); // 30
pessoa.idade = 200;
console.log(pessoa.idade); // 30 (não mudou)
console.log(pessoa.apresentar()); // "Olá, sou João e tenho 30 anos"
