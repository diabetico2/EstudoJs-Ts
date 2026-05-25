//operador ... rest(juntar)/spread(espalhar)
// usar rest como parametro de função

//usar spread com objeto
const func = {nome: 'Maria', Salario: 12345}
const clone = {ativo: true, ...func}
console.log(clone)

const grupoA = ['joão', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA]
console.log(grupoFinal)