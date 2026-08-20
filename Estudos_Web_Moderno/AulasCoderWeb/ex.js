const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Cabo USB", preco: 20 },
  { nome: "Monitor", preco: 1200 },
];

function filtrarPorPreco(produtos, limite) {
  const mapeamento = (vari) => vari.nome;
  const filtrar = (vari) => vari.preco <= limite;

  const resul = produtos.filter(filtrar).map(mapeamento);
  return resul;
}
console.log(filtrarPorPreco(produtos, 100))