const vitrine = [
    { nome: "Tênis", preco: 200 },
    { nome: "Camisa", preco: 95.90 },
    { nome: "Boné", preco: 50 }
]
const resul = vitrine.map(function(e){
    return{
        nome: e.nome,
        precoPromo: `R$${(e.preco * 0.8).toFixed(2)}`
    }
})

console.log(resul)