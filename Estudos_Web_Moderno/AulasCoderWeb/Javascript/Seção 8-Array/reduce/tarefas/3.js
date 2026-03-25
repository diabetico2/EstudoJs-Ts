const precosCusto = [10, 20, 30, 40];

// 1. Use o MAP para transformar os custos em PREÇOS DE VENDA (dobro)
const precosVenda = precosCusto.map((custo) => {
  // Retorne o custo multiplicado por 2
  return custo * 2;
});

// 2. Use o REDUCE no 'precosVenda' para somar tudo
const faturamentoTotal = precosVenda.reduce((soma, venda) => {
  // Some a venda ao que já foi acumulado
  return soma + venda;
});

console.log("Faturamento total esperado: R$", faturamentoTotal);
// Resultado esperado: 200
