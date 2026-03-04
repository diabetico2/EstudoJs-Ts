// ============================================================
// CORREÇÃO DO EXERCÍCIO 10 - CONTA BANCÁRIA
// ============================================================

// SOLUÇÃO COMPLETA:
const contaBancaria = {
  _titular: 'João Silva',
  _saldo: 1000,
  
  // MÉTODO: Depositar (AÇÃO, não getter/setter)
  depositar(valor) {
    if (valor <= 0) {
      console.log("Erro: valor deve ser positivo!");
      return false;
    }
    this._saldo += valor;
    return true;
  },
  
  // MÉTODO: Sacar (AÇÃO)
  sacar(valor) {
    if (valor <= 0) {
      console.log("Erro: valor deve ser positivo!");
      return false;
    }
    if (valor > this._saldo) {
      console.log("Erro: saldo insuficiente!");
      return false;
    }
    this._saldo -= valor;
    return true;
  },
  
  // GETTER: Saldo formatado em R$
  get saldo() {
    return this._saldo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
};

// ============================================================
// TESTE:
// ============================================================
console.log(contaBancaria.saldo);       // "R$ 1.000,00"
contaBancaria.depositar(500);
console.log(contaBancaria.saldo);       // "R$ 1.500,00"
contaBancaria.sacar(200);
console.log(contaBancaria.saldo);       // "R$ 1.300,00"
contaBancaria.sacar(5000);              // "Erro: saldo insuficiente!"
console.log(contaBancaria.saldo);       // "R$ 1.300,00" (não mudou)

// ============================================================
// EXPLICAÇÃO: MÉTODOS vs SETTERS
// ============================================================
// 
// Por que depositar() é MÉTODO e não SETTER?
//
// ❌ SETTER (errado para este caso):
// contaBancaria.depositar = 500;  ← Parece atribuição
// Confunde! Parece que você está SUBSTITUINDO o método
//
// ✅ MÉTODO (correto):
// contaBancaria.depositar(500);   ← Parece AÇÃO
// Claro que você está EXECUTANDO algo
//
// REGRA:
// - Setter: simples atribuição com validação
// - Método: ação complexa que modifica múltiplas coisas
//
// ============================================================
// EXPLICAÇÃO: VALIDAÇÕES
// ============================================================
// 
// depositar(valor) {
//   if (valor <= 0) return false;      ← Rejeita negativos
//   this._saldo += valor;
//   return true;
// }
//
// sacar(valor) {
//   if (valor <= 0) return false;      ← Rejeita negativos
//   if (valor > this._saldo) return false;  ← Rejeita > saldo
//   this._saldo -= valor;
//   return true;
// }
//
// Validação é ESSENCIAL em operações bancárias!
//
// ============================================================
// EXPLICAÇÃO: TOLOCALESTRING() PARA MOEDA
// ============================================================
// 
// this._saldo.toLocaleString('pt-BR', {
//   style: 'currency',
//   currency: 'BRL'
// })
//
// Parâmetros:
// - 'pt-BR' = Localização (português brasileiro)
// - style: 'currency' = Formato de moeda
// - currency: 'BRL' = Moeda em reais (Brazilian Real)
//
// Resultado:
// 1000 → "R$ 1.000,00"
// 1500.5 → "R$ 1.500,50"
// 0.99 → "R$ 0,99"
//
// ============================================================
// VERSÃO COM HISTÓRICO DE TRANSAÇÕES:
// ============================================================

const contaBancariaMelhor = {
  _titular: 'Maria Silva',
  _saldo: 2000,
  _historico: [],
  
  depositar(valor) {
    if (valor <= 0) {
      console.log("Erro: valor deve ser positivo!");
      return false;
    }
    this._saldo += valor;
    this._historico.push({
      tipo: 'Depósito',
      valor: valor,
      data: new Date(),
      saldoApos: this._saldo
    });
    return true;
  },
  
  sacar(valor) {
    if (valor <= 0) {
      console.log("Erro: valor deve ser positivo!");
      return false;
    }
    if (valor > this._saldo) {
      console.log("Erro: saldo insuficiente!");
      return false;
    }
    this._saldo -= valor;
    this._historico.push({
      tipo: 'Saque',
      valor: valor,
      data: new Date(),
      saldoApos: this._saldo
    });
    return true;
  },
  
  get saldo() {
    return this._saldo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  },
  
  get historicoFormatado() {
    return this._historico.map(t => ({
      ...t,
      valor: t.valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }),
      saldoApos: t.saldoApos.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    }));
  }
};

// Teste:
contaBancariaMelhor.depositar(500);
contaBancariaMelhor.sacar(200);
console.log(contaBancariaMelhor.saldo);  // "R$ 2.300,00"
console.log(contaBancariaMelhor.historicoFormatado);
// [
//   { tipo: 'Depósito', valor: 'R$ 500,00', ... },
//   { tipo: 'Saque', valor: 'R$ 200,00', ... }
// ]

// ============================================================
// COMPARAR: Diferentes abordagens de formatação
// ============================================================
// 
// ABORDAGEM 1: String simples
// get saldo() { return `R$ ${this._saldo}`; }
// Problema: 1500 fica "R$ 1500" (sem separador de mil)
//
// ABORDAGEM 2: .toFixed()
// get saldo() { return `R$ ${this._saldo.toFixed(2)}`; }
// Problema: 1500 fica "R$ 1500.00" (padrão americano)
//
// ABORDAGEM 3: .toLocaleString() ← MELHOR!
// Respeita localização: 1500 fica "R$ 1.500,00" (Brasil)
// Se mudar para 'en-US', fica "$1,500.00"
//
// ============================================================
// PARABÉNS! Você aprendeu:
// ✅ Métodos para ações complexas (depositar, sacar)
// ✅ Validações de negócio (valor positivo, saldo suficiente)
// ✅ Getter para retornar dados formatados
// ✅ Number.toLocaleString() para moeda
// ✅ Criar histórico de transações
// ============================================================
