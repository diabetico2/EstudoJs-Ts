// Exercicio extraido do PDF de Fundamentos de Programacao
const produto = {
    id: 20,
    nome: "Caneta Bic Azul",
    descricao: "Não preenchido",
    preco: 2.50
}
const removerPropriedade = function(obj, v){
    const copia = {...obj}
    delete copia[v]
    return copia
}

const resultado = removerPropriedade(produto, "descricao")
console.log("Objeto com a remoção:", resultado)
console.log("Objeto original (deve estar intacto):", produto)

// Teste de fogo (Imutabilidade):
console.log("O objeto retornado é uma cópia real?", Object.is(resultado, produto) === false) 
// Se aparecer 'true' acima, você acertou em cheio! [cite: 76, 77, 78, 79]