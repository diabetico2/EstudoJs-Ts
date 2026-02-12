// Valor por referencia
const nome = ['allan', 'jose', 'pereira']
//               0       1          2
//const nome = new Array('allan', 'jose', 'pereira')
nome[2] = 'jão'
//delete nome[2]
const novo = [...nome] // isso faz uma copia do array de nome, para não afeitar o array original

const removido = novo.pop()// com isso, é possivel ver qual nome foi deletado
console.log(novo)
console.log(nome)

nome.unshift('João') // unshfit para colocar em primeiro, push para por em ultimo
nome.unshift('Wallace')

console.log(nome, removido) 