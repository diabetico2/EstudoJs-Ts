// ============================================================
// EXERCÍCIO 10 - NÍVEL 3: BANCO COM HERANÇA
// ============================================================
// Objetivo: Crie um conta bancária com:
// - Propriedades: _titular, _saldo
// - Método depositar(valor) que adiciona ao saldo
// - Método sacar(valor) que subtrai
//   (mas não pode sacar mais que tem!)
// - Getter saldo que retorna formatado (ex: R$ 1.234,56)
//
// CAMINHO DE RACIOCÍNIO:
// 1. DEPOSITAR: valor válido (> 0) => adiciona ao saldo
// 2. SACAR: tem saldo suficiente? => subtrai
// 3. GETTER SALDO: retorna em formato legível de moeda
// 4. Métodos podem retornar boolean ou mensagem
// 5. Sempre VALIDE antes de fazer operações
//
// DOCUMENTAÇÃO:
// - Number.toLocaleString(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
// - if/else: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else
//
// EXEMPLO DO CONCEITO:
// Validação: verificar sempre se a operação é PERMITIDA
// Formatação: .toLocaleString() transforma em moeda/formato local
// Regra: saque precisa validar saldo disponível
// ============================================================

const contaBancaria = {
  _titular: "João Silva",
  _saldo: 1000,

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  },
  get saldo() {
    return this._saldo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },
  sacar(valorSacar) {
    if (this._saldo >= valorSacar) {
      this._saldo = this._saldo - valorSacar;
    } else {
      return "valor invalido";
    }
  },
};

// Teste seu código:
contaBancaria.depositar(500);
console.log(contaBancaria.saldo); // R$ 1.500,00
contaBancaria.sacar(200);
console.log(contaBancaria.saldo); // R$ 1.300,00
contaBancaria.sacar(5000); // não faz nada
console.log(contaBancaria.saldo); // R$ 1.300,00
