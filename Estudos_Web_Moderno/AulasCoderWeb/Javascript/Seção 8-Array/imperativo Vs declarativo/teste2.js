const convidados = ["Ana", "Bia", "Arthur", "Leo", "Amanda"]

// Dica: para saber se começa com A: nome.startsWith("A")
// Dica: para maiúsculas: nome.toUpperCase()


const nomeConv = nome => nome.startsWith("A") 
const nomeUp = nome => nome.toUpperCase()

const selecionados = convidados
    .filter(nomeConv)
    .map(nomeUp)

console.log(selecionados) // Esperado: ["ANA", "ARTHUR", "AMANDA"]