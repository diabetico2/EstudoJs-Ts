// não aceita repetição/não indexada

const times = new Set()
times.add('vasco')
times.add('São paulo').add('Palmeiras')
times.add('vasco')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Raquel','Lucas','Julia','Lucas']
const nomeSet = new Set(nomes)
console.log(nomeSet)// mesmo que o nomes tenha sido feito antes, 
// quando ele é posto num Set, as repetições são tiradas