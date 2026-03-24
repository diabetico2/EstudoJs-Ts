const vendasMensais = {
    "Carlos": [200, 150, 300], // Total: 650
    "Beatriz": [1000, 50],     // Total: 1050
    "Aline": [400, 400, 400]   // Total: 1200
}

const maisVendas = function(dados){
const formatados = Object.entries(dados)

const listaTotal = formatados.map(([Vendedor, venda])=> {
    const soma = venda.reduce((act,at) => act + at)
    return ({nome: Vendedor, total: soma})
})
listaTotal.sort((a,b)=> b.total - a.total)
const vencedor = listaTotal[0]

return `o vendedor ${vencedor.nome} vendeu mais, com ${vencedor.total}`
}


console.log(maisVendas(vendasMensais))