class lancamento {
  constructor(nome = "generico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class cicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamento = [];
  }
  addLancamentos(...lancamento) {
    lancamento.forEach((i) => this.lancamento.push(i));
  }

  sumario(){
    let valorConsolidado = 0
    this.lancamento.forEach(i => {
      valorConsolidado += i.valor
    })
    return valorConsolidado
  }
}
const salario = new lancamento('salario', 4500)
const contaLuz = new lancamento('luz', - 220)
const contas = new cicloFinanceiro(6,2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())