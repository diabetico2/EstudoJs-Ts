const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 250 },
  { nome: "Cabo", preco: 30 },
  { nome: "Monitor", preco: 900 }
]

const filtrar = f => f.preco < 100

const resul = produtos.filter(filtrar)
console.log(resul)