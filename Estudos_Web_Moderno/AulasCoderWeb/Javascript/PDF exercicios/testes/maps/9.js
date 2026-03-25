const produtos = [
  ["Teclado Mech", 5, 150],
  ["Mouse Gamer", 0, 80],
  ["Monitor 144hz", 2, 1200],
  ["Cabo HDMI", 10, 25],
  ["Headset", 0, 200],
];

const prod = function (produtoLista) {
  const lista = produtoLista
    .map(([nomeDoProduto, quantidadeEmEstoque, precoUnitario]) => {
      const valorTotal = quantidadeEmEstoque * precoUnitario;
      return {
        nomeProduto: nomeDoProduto,
        totalEmDinheiro: valorTotal,
        quantidadeEstoque: quantidadeEmEstoque,
      };
    })
    .filter(({ quantidadeEstoque }) => quantidadeEstoque > 0)
    .reduce((act, {totalEmDinheiro}) => act + totalEmDinheiro, 0);

  return lista;
};
console.log(prod(produtos));
