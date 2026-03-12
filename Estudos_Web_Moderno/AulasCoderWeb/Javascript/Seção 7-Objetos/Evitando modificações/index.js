// Object.reventExtension ( impede que o objeto seja extendido, é possivel excluir atributo, mas não adicionar)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))// verifica se o objeto é mutavel
produto.nome = 'Borracha'
//produto.descricao = 'Borracha escolar branca' ( foi comentado por que ele gera erro, devido ao preventExtension)
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) // com seal, não é possivel adicionar e nem excluir os atributos, mas é permitido mexer no existente
console.log('Selado', Object.isSealed(pessoa))

// pessoa.sobrenome = 'Silva'
// delete pessoa.nome

// ambos comentados pelo motivo acima


pessoa.idade = 29

console.log(pessoa)


//object.freeze (Não permite fazer nada)