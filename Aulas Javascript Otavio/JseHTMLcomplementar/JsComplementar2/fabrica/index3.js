function criaConta(titular, saldoInicial) {
  return {
    titular,
    saldoInicial,
    depositar: function (valor) {
        this.saldoInicial += valor 
      return `${this.titular} depositou ${valor} com sucesso, o saldo dele ${this.saldoInicial}`
    },
    sacar(valor){
        if (valor > this.saldoInicial){
            return `Valor não permitido, acima da quantidade que a conta possui`
        } else{
             this.saldoInicial -= valor;
          return `valor sacado som sucesso, saldo atual: ${this.saldoInicial}`
        }
    }
  };
}
const conta = criaConta("Allan", 100);
console.log(conta.depositar(50)); // Saldo vai para 150
console.log(conta.sacar(200));    // Deve negar o saque
console.log(conta.sacar(20));     // Deve permitir e sobrar 130