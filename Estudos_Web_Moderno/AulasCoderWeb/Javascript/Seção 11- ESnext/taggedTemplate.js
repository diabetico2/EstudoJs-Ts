//taggled templates - processa o template dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluni = 'gui'
const situacao = 'aprovado'
console.log(tag `${aluni} está ${situacao}.`)