const pedidos = [
    { item: "Expresso", preco: 5.50 },
    { item: "Cappuccino", preco: 12.00 },
    { item: "Pão de Queijo", preco: 7.00 },
    { item: "Latte", preco: 10.00 },
    { item: "Água", preco: 3.00 }
];

const fecharCaixa = function(){
 return pedidos.map(a => a.preco * 0.9).filter((a) => a > 6).reduce((act,at) => act + at)
}
console.log(fecharCaixa(pedidos));