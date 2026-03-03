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
// Dicas:
// - Validar se valor > 0 antes de depositar/sacar
// - Para saque, verificar se _saldo >= valor
// - Para formatação: .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
// ============================================================

const contaBancaria = {
  _titular: 'João Silva',
  _saldo: 1000,
  
  // Seu código aqui
};

// Teste seu código:
// contaBancaria.depositar(500);
// console.log(contaBancaria.saldo);     // R$ 1.500,00
// contaBancaria.sacar(200);
// console.log(contaBancaria.saldo);     // R$ 1.300,00
// contaBancaria.sacar(5000);             // não faz nada
// console.log(contaBancaria.saldo);     // R$ 1.300,00
